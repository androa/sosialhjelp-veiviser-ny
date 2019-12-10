import * as React from "react";
import {Normaltekst, Undertittel, Element, Innholdstittel} from "nav-frontend-typografi";
import Artikkel from "../Artikkel";
import {Hovedknapp} from 'nav-frontend-knapper';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import SokDigitaltPanel from "./komponenter/SokDigitaltPanel";
import IkkeSokDigitaltPanel from "./komponenter/IkkeSokDigitalt";
import {Sprak} from "../../utils/sprakUtils";
import {Oversettelser} from "../../komponenter/oversettelser/Oversettelser";
import KommuneSok from "./komponenter/kommunesok/Kommunesok";
import "./komponenter/sokSosialhjelp.less";
import {useState} from "react";

const SokSosialhjelp: React.FC = () => {

    const [kommuneId, setKommuneId] = useState<string|undefined>(undefined);

    const sokDigital = (event: any) => {
        const query = (kommuneId !== undefined) ? ("?kommuneId=" + kommuneId) : "";
        let soknadUrl: string = "/sosialhjelp/soknad/informasjon" + query;
        window.location.href = soknadUrl;
        event.preventDefault();
    };

    return (
        <Oversettelser sprak={[Sprak.NORSK_BOKMAL]}>
            <Artikkel
                tittel="Søk om økonomisk sosialhjelp"
            >
                <Innholdstittel>Søk om økonomisk sosialhjelp</Innholdstittel>

                <Normaltekst>
                    Du skal søke til NAV-kontoret der du bor. Stadig flere kommuner kan ta i mot digitale søknader.
                    Hvis du ikke skal søke digitalt, kan du søke med kommunens papirskjema.
                </Normaltekst>

                <br/>

                <SokDigitaltPanel>
                    <Undertittel className="sok_digitalt_overskrift">Søk digitalt</Undertittel>
                    <Lesmerpanel
                        border={false}
                        apneTekst="Sjekk om du kan søke digitalt i din kommune"
                        intro={
                            <div style={{paddingBottom: "1rem"}}>
                                <Hovedknapp
                                    onClick={(event: any) => sokDigital(event)}
                                >
                                    Gå til søknad
                                </Hovedknapp>
                            </div>
                        }
                    >
                        <KommuneSok onValgtKommune={(kommuneId: string) => setKommuneId(kommuneId)} />
                    </Lesmerpanel>
                </SokDigitaltPanel>


                <br/>
                <br/>

                <IkkeSokDigitaltPanel>
                    <Undertittel>Hvis du ikke skal søke digitalt</Undertittel>

                    <Lesmerpanel
                        intro={
                            <Normaltekst>
                                Hvis du ikke skal søke digitalt, kan du søke med kommunens
                                papirskjema.
                            </Normaltekst>
                        }
                        border={false}
                        apneTekst="Les mer"
                    >
                        <Element>Hvor finner jeg kommunens papirskjema?</Element>
                        <Normaltekst>
                            Du finner papirskjema på alle NAV-kontor. Mange kommuner har også et papirskjema
                            som kan lastes ned på nettsiden sin.
                        </Normaltekst>
                        <br/>
                        <Element>Hvorfor kan ikke alle kommuner ta imot digital søknad?</Element>
                        <Normaltekst>
                            Stadig flere kommuner kan ta i mot digitale søknader.
                            Hver enkelt kommuner bestemmer selv om de skal ta i bruk digital
                            søknad, og eventuelt når det skal skje. Ta kontakt med kommunen
                            din hvis du vil ha svar på om og når du kan søke digitalt i din kommune.
                        </Normaltekst>

                    </Lesmerpanel>
                </IkkeSokDigitaltPanel>

            </Artikkel>
        </Oversettelser>
    );
};

export default SokSosialhjelp;
