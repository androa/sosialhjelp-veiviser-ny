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
import {Panel} from "nav-frontend-paneler";

export const ForsideEnglish: React.FC = () => {
    return (
        <Dekorator erForside={true}>
            <div role="main" className="blokk-center forside">
                <SprakvelgerForside />

                <SokOmSosialhjelpPanel href="./slik-soker-du?lang=en">
                    Apply for financial assitance
                </SokOmSosialhjelpPanel>

                <InfoPanelContainer>
                    <Panel className="infopanel">
                        <Undertittel>Før du søker</Undertittel>
                        <ul>
                            <ForsideLenke href="./dette-bor-du-vite?lang=nb">
                                Dette bør du vite før du søker
                            </ForsideLenke>
                            <ForsideLenke href="./dette-kan-du-soke-om?lang=nb">
                                Hva kan du søke om?
                            </ForsideLenke>

                            <ForsideLenke href="./nodsituasjon?lang=nb">
                                Hva gjør du i en nødsituasjon?
                            </ForsideLenke>
                            <ForsideLenke href="./todo">
                                Hvor finner du søknadskjema på papir?
                            </ForsideLenke>
                            <ForsideLenke href="./andre-muligheter?lang=nb">
                                Andre muligheter til å forsørge deg
                            </ForsideLenke>
                        </ul>
                    </Panel>

                    <Panel className="infopanel">
                        <Undertittel>Etter at du har søkt</Undertittel>
                        <ul>
                            <ForsideLenke href="./todo">
                                Hva er status i saken min?
                            </ForsideLenke>
                            <ForsideLenke href="./todo">
                                Hvordan ettersender du dokumentasjon?
                            </ForsideLenke>
                            <ForsideLenke href="./todo">
                                Hvor lang tid tar det å behandle saken?{" "}
                            </ForsideLenke>
                            <ForsideLenke href="./todo">
                                Hvordan kontakter du veilederen din?
                            </ForsideLenke>
                            <ForsideLenke href="./todo">
                                Hvordan klager du på en sak?
                            </ForsideLenke>
                        </ul>
                    </Panel>
                </InfoPanelContainer>

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
                            Do you have questions about budgeting, finances, and
                            debt counseling?
                        </Undertittel>
                        <Normaltekst>
                            <ChatIkon />
                            Chat with us about debt counseling
                        </Normaltekst>
                    </InfoPanel>
                </InfoPanelContainer>
            </div>
        </Dekorator>
    );
};