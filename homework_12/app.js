// On page refresh emypty hash - necessary
location.hash = "";

let rootNode = document.getElementById("root");
let pageHeading = document.createElement('h1');
let page = document.createElement('div')
let tanksList = document.createElement('div');

function tankPreviewPage(arrTankObj) {
  pageHeading.textContent = `Most popular tanks`;
  page.classList.add("thumbnails");
  page.appendChild(pageHeading);
  tanksList.classList.add('tanksList');

  // Generate thumbnails
  for (let i = 0; i < arrTankObj.length; i++) {
    // Container for each thumbnail
    let tankItemLink = document.createElement('a');
    let tankItem = document.createElement('div');
    tankItem.classList.add("ellipsis");
    tankItem.setAttribute("aria-label", "Click for details");
    let tankImg = document.createElement('img');
    let tankName = document.createElement('p');
    let tankNameSpanTip = document.createElement('span');
    let tankNameLevel = document.createElement('span');
    let tankFlag = document.createElement('span');
    let tankFlagSpanTip = document.createElement('span');
    let tankFlagSpanImg = document.createElement('img');
    tankName.classList.add("tooltipImg");
    tankFlag.classList.add("tooltipImg");

    if (arrTankObj[i].model) {
      // hash is replaced spaces with '-' for the url
      tankItemLink.setAttribute('href', `#${arrTankObj[i].model}`.replace(/\s+/g, '-').toLowerCase());
      tankImg.setAttribute("src", arrTankObj[i].preview);
      tankImg.setAttribute("alt", arrTankObj[i].model);
      tankImg.classList.add("imgBlock");

      tankFlagSpanTip.classList.add("tooltipImgText")
      tankFlagSpanTip.textContent = arrTankObj[i].country;
      tankFlagSpanImg.classList.add("imgAutoWidth");
      tankFlagSpanImg.setAttribute("alt", arrTankObj[i].country);
      tankFlagSpanImg.setAttribute("src", arrTankObj[i].country_image);

      tankNameSpanTip.classList.add("tooltipName");
      tankNameSpanTip.textContent = arrTankObj[i].model;
      tankNameLevel.textContent = arrTankObj[i].level;

      tankFlag.appendChild(tankFlagSpanTip);
      tankFlag.appendChild(tankFlagSpanImg);
      tankName.appendChild(tankNameSpanTip);
      tankName.appendChild(tankNameLevel);
      tankName.appendChild(document.createTextNode(" " + arrTankObj[i].model));
      tankItem.appendChild(tankImg);
      tankItem.appendChild(tankFlag);
      tankItem.appendChild(tankName);
      tankItemLink.appendChild(tankItem);
      tanksList.appendChild(tankItemLink);
    }
  }
  page.appendChild(tanksList);
  return page;
}

function tankDetails(tank) {
  page.classList.remove("thumbnails");
  page.classList.add("tank-details");
  document.querySelector(".tanksList").textContent = ``;
  pageHeading.textContent = ``;
  let pageHeadingToolTip = document.createElement('span');
  pageHeadingToolTip.classList.add("tooltipImg");
  let toolTipImgText = document.createElement('span');
  toolTipImgText.classList.add("tooltipImgText");
  toolTipImgText.textContent = tank.country;
  let headingImg = document.createElement('img');
  headingImg.setAttribute("src", tank.country_image);
  headingImg.setAttribute("alt", tank.country);
  let headingLevel = document.createElement('span');
  headingLevel.textContent = `level ${tank.level}`;

  pageHeadingToolTip.appendChild(toolTipImgText);
  pageHeadingToolTip.appendChild(headingImg);
  pageHeading.appendChild(pageHeadingToolTip);
  pageHeading.appendChild(document.createTextNode(" " + tank.model));

  let detailsLeft = document.createElement('div');
  detailsLeft.classList.add("detailsLeft");
  let detailsH2 = document.createElement('h2');
  detailsH2.textContent = "Preview";
  let detailsImg = document.createElement('img');
  detailsImg.setAttribute("src", tank.preview);
  detailsImg.setAttribute("alt", tank.model);
  detailsLeft.appendChild(detailsH2);
  detailsLeft.appendChild(detailsImg);

  let detailsTable = document.createElement('div');
  detailsTable.classList.add("detailsTable");
  let detailsTableH2 = document.createElement('h2');
  detailsTableH2.textContent = "Characteristic";
  detailsTable.appendChild(detailsTableH2);
  detailsTable.appendChild(buildTable(tank.details));
  let returnToThumbnails = document.createElement('a');
  returnToThumbnails.setAttribute("href", "#");
  returnToThumbnails.textContent = "Back to list view";
  tanksList.appendChild(detailsLeft);
  tanksList.appendChild(detailsTable);
  tanksList.appendChild(returnToThumbnails);
}

function buildTable(table) {
  let tableBuild = document.createElement('table');
  for (var key in table) {
    let row = document.createElement('tr');
    let tdName = document.createElement('td');
    tdName.textContent = key.replace(/_/g, ' ');;
    let tdValue = document.createElement('td');
    tdValue.textContent = table[key];
    row.appendChild(tdName);
    row.appendChild(tdValue);
    tableBuild.appendChild(row);
  }
  return tableBuild;
}

rootNode.appendChild(tankPreviewPage(tanks));

window.addEventListener("hashchange", function () {
  for (let i = 0; i < tanks.length; i++) {
    if (location.hash === `#${tanks[i].model}`.replace(/\s+/g, '-').toLowerCase()) {
      tankDetails(tanks[i]);
      return;
    }
  }
  // build preview page when 'Back to list' is pressed
  if (location.hash = "#") {
    tanksList.textContent = "";
    page.classList.remove("tank-details");
    page.classList.add("thumbnails");
    rootNode.appendChild(tankPreviewPage(tanks));
  }
});