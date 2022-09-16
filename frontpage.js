const rows = document.querySelectorAll("#myTable tbody tr"); // all rows with data
document.getElementById("filter").addEventListener("change", function() { // any select change
  const filters = [...this.querySelectorAll("select")].map(sel => sel.value); // make an array of values
  rows.forEach(row => { // loop over all rows
    const string = [...row.querySelectorAll("td")].map(td => td.textContent.trim()).join(" "); // join the cell content
    const found = filters.every(filter => { // every filter is looked at
      if (filter === "") return true; // it could be empty
      return string.includes(filter); // if not return true if found
    })
    row.hidden = filters.join("") != "" && !found; // hide if something was selected and not found
  })
})