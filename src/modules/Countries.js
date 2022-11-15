let coords = [{xmin:160,xmax:232,ymin:48,ymax:82},{xmin:172,xmax:222,ymin:262,ymax:300}, 
    {xmin:95,xmax:119,ymin:465,ymax:540},{xmin:158,xmax:259,ymin:461,ymax:558},{xmin:271,xmax:384,ymin:362,ymax:461},
    {xmin:354,xmax:388,ymin:336,ymax:356}, {xmin:380,xmax:401,ymin:305,ymax:333}, {xmin:392,xmax:397,ymin:357,ymax:366},
    {xmin:408,xmax:436,ymin:403,ymax:419}, {xmin:424,xmax:489,ymin:306,ymax:399}, {xmin:491,xmax:553,ymin:388,ymax:415},
    {xmin:440,xmax:496,ymin:245,ymax:276}, {xmin:449,xmax:494,ymin:116,ymax:205}, {xmin:512,xmax:553,ymin:58,ymax:256},
    {xmin:639,xmax:677,ymin:45,ymax:175}, {xmin:503,xmax:568,ymin:349,ymax:377}, {xmin:583,xmax:638,ymin:373,ymax:385},
    {xmin:530,xmax:653,ymin:290,ymax:356}, {xmin:563,xmax:640,ymin:399,ymax:424}, {xmin:415,xmax:540,ymin:419,ymax:566},
    {xmin:513,xmax:542,ymin:420,ymax:433}, {xmin:544,xmax:603,ymin:423,ymax:442}, {xmin:554,xmax:607,ymin:447,ymax:475},
    {xmin:599,xmax:624,ymin:471,ymax:487}, {xmin:632,xmax:654,ymin:476,ymax:487}, {xmin:621,xmax:636,ymin:489,ymax:525},
    {xmin:638,xmax:739,ymin:511,ymax:577}, {xmin:675,xmax:758,ymin:460,ymax:498}, {xmin:772,xmax:999,ymin:467,ymax:558},
    {xmin:643,xmax:755,ymin:393,ymax:451}, {xmin:738,xmax:764,ymin:380,ymax:415}, {xmin:675,xmax:908,ymin:300,ymax:426},
    {xmin:666,xmax:770,ymin:250,ymax:318}, {xmin:620,xmax:683,ymin:252,ymax:281}, {xmin:614,xmax:702,ymin:224,ymax:248},
    {xmin:641,xmax:691,ymin:193,ymax:219}, {xmin:708,xmax:995,ymin:40,ymax:292}, {xmin:615,xmax:666,ymin:430,ymax:482},
    {xmin:637,xmax:677,ymin:491,ymax:507}, {xmin:256,xmax:316,ymin:200,ymax:334}]
let countries = ['Iceland', 'Ireland', 'Portugal', 'Spain', 'France', 'Belgium', 'Netherlands', 'Luxembourg', 'Switzerland',
'Germany', 'Austria', 'Denmark', 'Norway', 'Sweden', 'Finland', 'Czhechia', 'Slovakia', 'Poland', 'Hungary', 'Italy',
'Slovenia', 'Croatia', 'Bosnia', 'Montenegro', 'Kosovo', 'Albania', 'Greece', 'Bulgaria', 'Turkey', 'Romania', 'Moldova',
'Ukraine', 'Belarus', 'Lithuania', 'Latvia', 'Estonia', 'Russia', 'Serbia', 'North Macedonia', 'United Kingdom']

function checkAnswer(answerIndex, xCoord, yCoord){
    if(xCoord <= coords[answerIndex].xmax && xCoord >= coords[answerIndex].xmin){
        if(yCoord <= coords[answerIndex].ymax && yCoord >= coords[answerIndex].ymin){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}

export {checkAnswer, countries}