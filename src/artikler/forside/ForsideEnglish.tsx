import * as React from "react";
import {
    InfoPanel,
    InfoPanelContainer,
} from "../../komponenter/infopanel/InfoPanel";
import "./komponenter/forside.less";
import {Normaltekst, Undertittel} from "nav-frontend-typografi";
import Dekorator from "../../komponenter/dekorator/Dekorator";
import SokOmSosialhjelpPanel from "./komponenter/SokOmSosialhjelpPanel";
import ChatIkon from "../../komponenter/bilder/ChatIkon";
import {SprakvelgerForside} from "./komponenter/SprakvelgerForside";
import {ForsideLenke} from "./komponenter/ForsideLenke";
import {AlertStripeInfo} from "nav-frontend-alertstriper";
import Lenke from "nav-frontend-lenker";

export const ForsideEnglish: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />

                <AlertStripeInfo>
                    <Lenke href="./korona">
                        Coronavirus - More people may be entitled to financial
                        assistance
                    </Lenke>
                </AlertStripeInfo>

                <br />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assitance
                </SokOmSosialhjelpPanel>

                <div className="lenkeboks_container lenkeboks_container--2_spalter">
                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            Before applying
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./dette-bor-du-vite?lang=en"
                                description="Information for first time applicants"
                            >
                                What you should know
                            </ForsideLenke>
                            <ForsideLenke
                                href="./dette-kan-du-soke-om?lang=en"
                                description="Expenses you can apply for"
                            >
                                What you can apply for
                            </ForsideLenke>
                            <ForsideLenke
                                href="./nodsituasjon?lang=en"
                                description="Assistance to cover bare essentatials"
                            >
                                When you are in a financial emergency
                            </ForsideLenke>
                            <ForsideLenke
                                href="./sok-papir?lang=en"
                                description="Where to find application form on paper"
                            >
                                Application form on paper
                            </ForsideLenke>
                            <ForsideLenke
                                href="./andre-muligheter?lang=en"
                                description="Other possibilities to provide for yourself"
                            >
                                Other possibilities
                            </ForsideLenke>
                        </ul>
                    </div>

                    <div className="lenkeboks lenkeboks_forside lenkeboks_med_border">
                        <Undertittel style={{textAlign: "left"}}>
                            After applying
                        </Undertittel>
                        <ul>
                            <ForsideLenke
                                href="./behandlingstid?lang=en"
                                description="How long will it take to process my application?"
                            >
                                Processing time
                            </ForsideLenke>
                            <ForsideLenke
                                href="./ettersende?lang=en"
                                description="How to upload documentation"
                            >
                                Upload documentation
                            </ForsideLenke>
                            <ForsideLenke
                                href="./status-soknad?lang=en"
                                description="What is the status of your application?"
                            >
                                Application status
                            </ForsideLenke>
                            <ForsideLenke
                                href="./kontakte-veileder?lang=en"
                                description="How to contact your case worker"
                            >
                                Contact case worker
                            </ForsideLenke>
                            <ForsideLenke
                                href="./klage?lang=en"
                                description="How to appeal the decisions on social services"
                            >
                                Appeal
                            </ForsideLenke>
                        </ul>
                    </div>
                </div>

                <InfoPanelContainer>
                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/sosialhjelp"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Do you have questions about social services and
                            financial assistance?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat witch us about social services
                        </Normaltekst>
                    </InfoPanel>

                    <InfoPanel
                        href="https://www.nav.no/person/kontakt-oss/chat/okonomi"
                        className="infopanel_chat"
                    >
                        <Undertittel>
                            Do you have questions about budgeting, finances and
                            debt?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat with us about your finance and debt
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>
            </div>
        </Dekorator>
    );
};
