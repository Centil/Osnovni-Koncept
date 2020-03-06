const domain_structure = "cqrtable_domain_";
const facet_structure = ["cqrtable_domain_", "facet_", "_"];
const facet_orientation = new Map([["TL", 0], ["TR", 1], ["BR", 2], ["BL", 3]]);

const domain_data = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
const facet_data = [[[0,0,0], [0,0,0], [0,0,0], [0,0,0]], 
                    [[0,0,0], [0,0,0], [0,0,0], [0,0,0]], 
                    [[0,0,0], [0,0,0], [0,0,0], [0,0,0]], 
                    [[0,0,0], [0,0,0], [0,0,0], [0,0,0]]];
const facet_heights = [[90,90,90,60,60,60,30,30,30], 
                       [90,90,90,60,60,60,30,30,30], 
                       [30,30,30,60,60,60,90,90,90],
                       [30,30,30,60,60,60,90,90,90]];
const facet_widths = [[90,60,30,90,60,30,90,60,30],
                      [30,60,90,30,60,90,30,60,90],
                      [30,60,90,30,60,90,30,60,90],
                      [90,60,30,90,60,30,90,60,30]];
const facet_height_max = 180;
const facet_width_max = 180;
const internal_facet_locations = [[0,0], [0,1], [0,2],
                                  [1,0], [1,1], [1,2],
                                  [2,0], [2,1], [2,2]];
const internal_facet_fi = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

/**    DOMAINS               FACETS               FACET HEIGHTS              FACET WIDTHS
 *  1 1 1 | 2 2 2   ##   1 2 3 | 1 2 3   ##   90 90 90 | 90 90 90   ##   90 60 30 | 30 60 90
 *  1 1 1 | 2 2 2   ##   4 5 6 | 4 5 6   ##   60 60 60 | 60 60 60   ##   90 60 30 | 30 60 90
 *  1 1 1 | 2 2 2   ##   7 8 9 | 7 8 9   ##   30 30 30 | 30 30 30   ##   90 60 30 | 30 60 90
 *  - - - - - - -   ##   - - - - - - -   ##   -- -- -- - -- -- --   ##   -- -- -- - -- -- --
 *  4 4 4 | 3 3 3   ##   1 2 3 | 1 2 3   ##   30 30 30 | 30 30 30   ##   90 60 30 | 30 60 90
 *  4 4 4 | 3 3 3   ##   4 5 6 | 4 5 6   ##   60 60 60 | 60 60 60   ##   90 60 30 | 30 60 90
 *  4 4 4 | 3 3 3   ##   7 8 9 | 7 8 9   ##   90 90 90 | 90 90 90   ##   90 60 30 | 30 60 90
 *  (const d 0-3)        (const f 0-3)           (const fi 1-9)             (const fi 1-9)
 */

 /**  VALID POINTS               INTERNAL FACET LOCATIONS
  *  . . . | . _ _   ##   (0,0) (0,1) (0,2) | (0,0) (0,1) (0,2)   ##   
  *  . . . | . _ _   ##   (1,0) (1,1) (1,2) | (1,0) (1,1) (1,2)   ##   
  *  . . . | . _ _   ##   (2,0) (2,1) (2,2) | (2,0) (2,1) (2,2)   ##   
  *  - - - - - - -   ##   ----- ----- ----- - ----- ----- -----
  *  . . . | . _ _   ##   (0,0) (0,1) (0,2) | (0,0) (0,1) (0,2)   ##   
  *  _ _ _ | _ _ _   ##   (1,0) (1,1) (1,2) | (1,0) (1,1) (1,2)   ##   
  *  _ _ _ | _ _ _   ##   (2,0) (2,1) (2,2) | (2,0) (2,1) (2,2)   ##   
  *     (y , x)
  */

function setDomain(facet) {
    const facet_info = stripFacetInfo(facet_structure, facet.id.toString());
    const domain = document.getElementById(domain_structure+facet_info[0]);

    const d = setupDomainData(facet_info, facet.getAttribute("y"), facet.getAttribute("x"));

    domain.setAttribute("y", domain_data[d][0]);
    domain.setAttribute("x", domain_data[d][1]);
    domain.setAttribute("height", domain_data[d][2]);
    domain.setAttribute("width", domain_data[d][3]);
    //displayDomainData(d);
    //displayDomainFacetsData(d);
}

function stripFacetInfo(structure, id) {
    let tmp = id.replace(structure[0], "");
    tmp = tmp.replace(structure[1], "");
    return tmp.split(structure[2]);
}

function setupDomainData(facet_info, y, x) {
    const d = parseInt(facet_info[0])-1;
    const f = facet_orientation.get(facet_info[1]);
    const fi = parseInt(facet_info[2]);

    setupFacetData(d, f, fi, y, x);
    initialiseDomaindata(d);
    return d;
}

function setupFacetData(d, f, fi, y, x) {
    if (facet_data[d][f][0] == fi)
    {
        resetFacetData(d, f);   //reset if facet positions match
    }
    else {
        facet_data[d][f][0] = fi;   //set new facet position

        if (f == 0) {
            facet_data[d][f][1] = parseInt(y);  //set it's y
            facet_data[d][f][2] = parseInt(x);  //set it's x
        }
        else {
            setOriginOfFacet(d, f, fi); //fix origin problems
        }
        //fix neighbours data affected by the new selection
        matchNeighboursToSelection(d, f, fi);
    }
}

function initialiseDomaindata(d) {
    //first reset domain data so rect is cleared
    resetDomainData(d);

    //get facets internal positioning: {1-9}
    const f1 = facet_data[d][0][0]; //facet 1
    const f2 = facet_data[d][1][0]; //facet 2
    const f3 = facet_data[d][2][0]; //facet 3
    const f4 = facet_data[d][3][0]; //facet 4

    //if facet 1 has values setup all from here
    if (f1 != 0) {  //goes through all facets, no fixing needed
        domain_data[d][0] = facet_data[d][0][1];    //set y
        domain_data[d][1] = facet_data[d][0][2];    //set x
        domain_data[d][2] = facet_heights[0][f1-1]; //set height
        domain_data[d][3] = facet_widths[0][f1-1];  //set width

        if (f4 != 0)    //calculate new added height
            domain_data[d][2] += facet_heights[3][f4-1];    //add height

        if (f2 != 0)    //calculate new added width
            domain_data[d][3] += facet_widths[1][f2-1];     //add width

        if (f3 != 0) {      //check if height and width needs to be added
            if (f4 == 0)    //calculate new added height
                domain_data[d][2] += facet_heights[2][f3-1];    //add height
            if (f2 == 0)    //calculate new added width
                domain_data[d][3] += facet_widths[2][f3-1];     //add width
        }
        
    }   //else continue with facet 2
    else if (f2 != 0) {     //X may need to be fixed
        domain_data[d][0] = facet_data[d][1][1];    //set y
        domain_data[d][1] = facet_data[d][1][2];    //set x
        domain_data[d][2] = facet_heights[1][f2-1]; //set height
        domain_data[d][3] = facet_widths[1][f2-1];  //set width

        if (f4 != 0) {    //calculate new added height
            domain_data[d][1] = facet_data[d][3][2];        //fix the x
            domain_data[d][2] += facet_heights[3][f4-1];    //add height
            domain_data[d][3] += facet_widths[3][f4-1];     //add height
        }

        if (f3 != 0) {      //check if height needs to be added
            if (f4 == 0)    //calculate new added height
                domain_data[d][2] += facet_heights[2][f3-1]; //add height
        }

        //TO DO check if x and y != 0 for facet 1, then add w and h accordingly

    }   //else continue with facet 4
    else if (f4 != 0) { //Y & X do not need any additional fixing
        domain_data[d][0] = facet_data[d][3][1];    //set y
        domain_data[d][1] = facet_data[d][3][2];    //set x
        domain_data[d][2] = facet_heights[3][f4-1]; //set height
        domain_data[d][3] = facet_widths[3][f4-1];  //set width

        if (f3 != 0) {  //calculate new added width
            domain_data[d][3] += facet_widths[2][f3-1]; //add width
        }

    }   //else continue with facet 3
    else if (f3 != 0) { //only facet 3 data is needed
        domain_data[d][0] = facet_data[d][2][1];    //set y
        domain_data[d][1] = facet_data[d][2][2];    //set x
        domain_data[d][2] = facet_heights[2][f3-1]; //set height
        domain_data[d][3] = facet_widths[2][f3-1];  //set width
    }
}
function resetDomainData(d) {
    for(let i = 0; i < domain_data[d].length; i++)
        domain_data[d][i] = 0;
}
function resetFacetData(d, f) {
    for(let i = 0; i < facet_data[d][f].length; i++)
        facet_data[d][f][i] = 0;
}
function displayDomainData(d) {
    console.log("Domain "+(d+1)+": y="+domain_data[d][0]+" x="+domain_data[d][1]+
                    " height="+domain_data[d][2]+" width="+domain_data[d][3]);
}
function displayDomainFacetsData(d) {
    console.log("Domain "+(d+1)+": [F1, F2, F3, F4]=[" + facet_data[0][0] + "], [" + facet_data[0][1] +
                                         "], [" + facet_data[0][2] + "], [" + facet_data[0][3] + "]");
}
function setOriginOfFacet(d, f, fi) {
    const tmp = getCorrectOriginFacet(d, f, fi);  //calculate right origin

    if (tmp != null) {  //and set it's y and x
        facet_data[d][f][1] = parseInt(tmp.getAttribute("y"));
        facet_data[d][f][2] = parseInt(tmp.getAttribute("x"));
    }
}
function getCorrectOriginFacet(d, f, fi) {
    const fx = Array.from(facet_orientation.keys());
    const ref = facet_structure[0]+(d+1)+"_"+facet_structure[1]+fx[f]+facet_structure[2];

    switch(f) { //check for origin point
        case 0: //facet 1 has origin point exactly the same as the d, f, fi
            return document.getElementById(ref+fi);
            break;
        case 1: //facet 2 has three horizontal origin points (1, 4, 7)
            if (fi >= 1 && fi < 4)          //fi is located in first row
                return document.getElementById(ref+1);
            else if (fi >= 4 &&  fi < 7)    //fi is located in second row
                return document.getElementById(ref+4);
            else if (fi >= 7 && fi < 10)    //fi is located in third row
                return document.getElementById(ref+7);
            break;
        case 2: //facet 3 only has one origin point (1)
            return document.getElementById(ref+1);
            break;
        case 3: //facet 4 has three vertical origin points (1, 2, 3)
            if (fi == 1 || fi == 4 || fi == 7)          //fi is located in first column
                return document.getElementById(ref+1);
            else if (fi == 2 || fi == 5 || fi == 8)    //fi is located in second column
                return document.getElementById(ref+2);
            else if (fi == 3 || fi == 6 || fi == 9)    //fi is located in third column
                return document.getElementById(ref+3);
            break;
    }
    return null;
}
function matchNeighboursToSelection(d, f, fi) {
    const f1 = facet_data[d][0][0];
    const f2 = facet_data[d][1][0];
    const f3 = facet_data[d][2][0];
    const f4 = facet_data[d][3][0];
    const locFi = internal_facet_locations[fi-1];
    let locFx = null;

    switch(f) {
        case 0: //our newest selection was facet 1
            if (f2 != 0) {  //do we need to fix facet 2?
                locFx = internal_facet_locations[f2-1];
                if(locFi[0] < locFx[0] || locFi[0] > locFx[0]) { //check Y axis difference smaller or bigger
                    facet_data[d][1][0] = internal_facet_fi[locFi[0]][locFx[1]]; //set new fi for facet 2
                    setOriginOfFacet(d, 1, facet_data[d][1][0]); //fix new origin problems
                }
            }
            if (f4 != 0) {  //do we need to fix facet 4?
                locFx = internal_facet_locations[f4-1];
                if(locFi[1] < locFx[1] || locFi[1] > locFx[1]) { //check X axis difference smaller or bigger
                    facet_data[d][3][0] = internal_facet_fi[locFx[0]][locFi[1]]; //set new fi for facet 4
                    setOriginOfFacet(d, 3, facet_data[d][3][0]); //fix new origin problems
                }
            }
            break;
        case 1: //our newest selection was facet 2
            if (f1 != 0) {  //do we need to fix facet 1?
                locFx = internal_facet_locations[f1-1];
                if(locFi[0] < locFx[0] || locFi[0] > locFx[0]) { //check Y axis difference smaller or bigger
                    facet_data[d][0][0] = internal_facet_fi[locFi[0]][locFx[1]]; //set new fi for facet 1
                    setOriginOfFacet(d, 0, facet_data[d][0][0]); //fix new origin problems
                }
            }
            if (f3 != 0) {  //do we need to fix facet 3?
                locFx = internal_facet_locations[f3-1];
                if(locFi[1] < locFx[1] || locFi[1] > locFx[1]) //check X axis difference smaller or bigger
                    facet_data[d][2][0] = internal_facet_fi[locFx[0]][locFi[1]]; //set new fi for facet 3
                //no coordinates fix needed for facet 3
            }
            break;
        case 2: //our newest selection was facet 3
            if (f4 != 0) {  //do we need to fix facet 4?
                locFx = internal_facet_locations[f4-1];
                if(locFi[0] < locFx[0] || locFi[0] > locFx[0]) { //check Y axis difference smaller or bigger
                    facet_data[d][3][0] = internal_facet_fi[locFi[0]][locFx[1]]; //set new fi for facet 4
                    setOriginOfFacet(d, 3, facet_data[d][3][0]); //fix new origin problems
                }
            }
            if (f2 != 0) {  //do we need to fix facet 2?
                locFx = internal_facet_locations[f2-1];
                if(locFi[1] < locFx[1] || locFi[1] > locFx[1]) { //check X axis difference smaller or bigger
                    facet_data[d][1][0] = internal_facet_fi[locFx[0]][locFi[1]]; //set new fi for facet 2
                    setOriginOfFacet(d, 1, facet_data[d][1][0]); //fix new origin problems
                }
            }
            break;
        case 3: //our newest selection was facet 4
            if (f3 != 0) {  //do we need to fix facet 3?
                locFx = internal_facet_locations[f3-1];
                if(locFi[0] < locFx[0] || locFi[0] > locFx[0]) //check Y axis difference smaller or bigger
                    facet_data[d][2][0] = internal_facet_fi[locFi[0]][locFx[1]]; //set new fi for facet 3
                //no coordinates fix needed for facet 3
            }
            if (f1 != 0) {  //do we need to fix facet 1?
                locFx = internal_facet_locations[f1-1];
                if(locFi[1] < locFx[1] || locFi[1] > locFx[1]) { //check X axis difference smaller or bigger
                    facet_data[d][0][0] = internal_facet_fi[locFx[0]][locFi[1]]; //set new fi for facet 1
                    setOriginOfFacet(d, 0, facet_data[d][0][0]); //fix new origin problems
                }
            }
            break;
    }
}