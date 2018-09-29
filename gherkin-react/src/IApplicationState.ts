import {io} from "cucumber-messages";
import {List, Map} from 'immutable'
import IGherkinDocument = io.cucumber.messages.IGherkinDocument;
import IPickle = io.cucumber.messages.IPickle;

// type Keys = "gherkinDocumentUri" | "gherkinDocuments" | "pickles"


export default interface IApplicationState {
    gherkinDocumentUri: string | null,
    gherkinDocuments: Map<string, IGherkinDocument>
    pickles: Map<string, List<IPickle>>
}
