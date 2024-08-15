let searchListings = document.getElementById("SearchListings"); // listings container
let priorityListingsDivider = document.getElementById("divPriorityListingsTitle");
let searchListingsChildren = searchListings.children;

function clearPriorityListings() {
    priorityListingsDivider.remove();

    if (searchListings) {
        for (let i = 0; i < searchListingsChildren.length; i++) {
            if (searchListingsChildren[i].classList.contains("priority-qa") 
                || searchListingsChildren[i].classList.contains("billboard") 
                || searchListingsChildren[i].classList.contains("billboardBannerElement")) 
            {
                searchListingsChildren[i].outerHTML = `<div class="hidden"></div>`;
            }
        }
    }
}

const mutationObserver = new MutationObserver(() => {
    clearPriorityListings();
})

clearPriorityListings(); // initial clear after page loads
mutationObserver.observe(searchListings, { childList: true });
