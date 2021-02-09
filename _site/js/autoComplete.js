// Import fuseJs from skypack.
import fuseJs from "https://cdn.skypack.dev/fuse.js";

// Init a new Fuse instance with some pretty random docs.
const docs = [
  { title: "Kenya" },
  { title: "The Wind in the Willows" },
  { title: "Frog and Toad" },
  { title: "A Farewell to Arms", directLink: true },
  { title: "The Lorg of the Rings" },
  { title: "Dr. No" },
  { title: "Star Wars", directLink: true },
  { title: "For Whom the Bell Tolls" },
  { title: "The Black Jacobins" },
  { title: "Death in the Afternoon" }
];
const fuse = new fuseJs(docs, {
  keys: ["title"]
});

// Runs a Fuse search on query.
function doFuseSearch(query) {
  let results = fuse.search(query);
  return results;
}

// Autocomplete component.
window.autoComplete = function () {
  return {
    cursorIndex: -1,
    activeSuggestion: null,
    inputValue: "",
    active: true,
    suggestions: [],
    query: "",
    updateSuggestions: function (data) {
      this.query = data;
      this.suggestions = doFuseSearch(this.query);
    },
    getThis: function () {
      let t = this;
      return t;
    },
    getRefs(which) {
      return this.$refs[which];
    },
    moveUpList() {
      // Move up the list if there is a list and we're not at the top already.
      if (this.suggestions.length > 0 && this.cursorIndex > 0) {
        // Decrement cursorIndex.
        this.cursorIndex--;

        // Remove active status from any other suggestion.
        let oldActive = this.suggestions.find(
          (suggestion) => suggestion.active
        );
        if (oldActive) {
          oldActive.active = false;
        }

        // Add active status to suggestion at cursorIndex.
        this.suggestions[this.cursorIndex].active = true;
        this.inputValue = this.suggestions[this.cursorIndex].item.title;
        // console.log(this.suggestions[this.cursorIndex].item.title);
      }
    },
    moveDownList() {
      // Move down the list only if there is room on the list to move down.
      if (
        this.suggestions.length > 0 &&
        this.cursorIndex < this.suggestions.length - 1
      ) {
        // Just increment the cursorIndex.
        this.cursorIndex++;

        // Remove active status from any other suggestion.
        let oldActive = this.suggestions.find(
          (suggestion) => suggestion.active
        );
        if (oldActive) {
          oldActive.active = false;
        }
        // console.log(this.suggestions[this.cursorIndex].item.title);
        this.suggestions[this.cursorIndex].active = true;
        this.inputValue = this.suggestions[this.cursorIndex].item.title;
      }
    }
  };
};

// TODO: last thing maybe: a proper reset, where active item is cleared, cursorIndex is back to zero etc - happens every time the search is cancelled, so need to make it generically callable.

// Note: having this tabbable is sort of a11y ideal I think but that combined w/ the up/down KB nav is sort of an anti-pattern I think - basically two ways to navigate but I think its ok for now. Possible to perhaps tab index to wherever navigated. Or more easily, make those things not tabbable.

// TODO: add key-down.enter behavior for selected suggestion (i.e. search. NB: conflicts w/ the tab issue above... resolving that by setting focus or not makes sense.) - DONE(?)
//// TODO:/DONE? so changing the keydown behaviour to 'direct link to (since that's a link) makes sense and is a good idea - in some UI the autosuggestions are not search term suggestions but actually links to direct results, which we can pretend is the case here for now and makes good use of a11y focus/tab AND is good autosuggest and a subtle but important (and maintained!) difference: if you click that suggestion you go right to doc, BUT if you click search button you search for that term!'
// Last last todo for the above: include 'directLink' prop to doc and style some of the sample docs w/ an icon to indicate that...use an emojii or something. -- DONE

// TODO: move selected AC suggestion into the input? (google and amazon both do this.) - DONE
/// BUUUT....TODO: google puts original query into top of autosuggest, styled slightly different, nice trick to be able to get back to original query...but this is a nice to have for sure.

// TODO: add 'autoSuggestBasis' variable; the stuff intially typed as the first row of suggestions (so can be navigated back to). This gets set the whenever a Fuse search is run with (query), i.e. autoSuggestBasis = query. Wikipedia adds it at the end of the list, which is interesting - Bing hides it but allows you to keyboard back up to the input to reveal it again.  I like the Google approach which is the one I want to TODO here.

// TODO: resume w/ some of the todos above, but this thing is definitely good enough for now - yeah, its amazing actually in less than 100 lines of JS and 25 lines of HTML!!!
