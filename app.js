function getOption() {
    selectElement = document.querySelector('#measure');
    output = selectElement.value;

    radius = document.getElementById('radius').value;

    surfaceArea = `${4 * 3.14 * radius * radius}`;

    document.querySelector('.output').textContent = surfaceArea;

    document.querySelector('.parameter').textContent = output;

    console.log(surfaceArea);

}

function coneSurface() {
    selectElement1 = document.querySelector('#cone-measure1');
    selectElement2 = document.querySelector('#cone-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('base-radius').value;

    Height = document.getElementById('height').value;


    // base surface area

    BaseSurfaceArea = `${3.14 * Baseradius * Baseradius}`;

    document.querySelector('.BSA').textContent = BaseSurfaceArea;

    document.querySelector('.parameter1').textContent = param1;


    // Lateral surface area

    
    LateralSurfaceArea = `${3.14 * Baseradius * Math.sqrt(Baseradius * Baseradius +  Height * Height)}`;

    document.querySelector('.LSA').textContent = LateralSurfaceArea;

    document.querySelector('.parameter2').textContent = param2;


}


function coneSurface() {
    selectElement1 = document.querySelector('#cone-measure1');
    selectElement2 = document.querySelector('#cone-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('base-radius').value;

    Height = document.getElementById('height').value;


    // base surface area

    BaseSurfaceArea = `${3.14 * Baseradius * Baseradius}`;

    document.querySelector('.BSA').textContent = BaseSurfaceArea;

    document.querySelector('.parameter1').textContent = param1;


    // Lateral surface area

    LateralSurfaceArea = `${3.14 * Baseradius * Math.sqrt(Baseradius * Baseradius +  Height * Height)}`;

    document.querySelector('.LSA').textContent = LateralSurfaceArea;

    document.querySelector('.parameter2').textContent = param2;


    // Total surface area

    TotalSurfaceArea = `${((BaseSurfaceArea + LateralSurfaceArea))}`;


    document.querySelector('.TSA').textContent = TotalSurfaceArea;

    document.querySelector('.parameter3').textContent = param2;


}


function cubeSurface() {
    selectElement = document.querySelector('#cube-meausure');
    output = selectElement.value;

    Length = document.getElementById('length').value;

    cubeSurfaceArea = `${6 * Length * Length}`;

    document.querySelector('.cube-output').textContent = cubeSurfaceArea;

    document.querySelector('.cube-parameter').textContent = output;

    console.log(surfaceArea);

}


function CylindricalTankSurface() {
    selectElement1 = document.querySelector('#cone-measure1');
    selectElement2 = document.querySelector('#cone-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('top-base-radius').value;

    Height = document.getElementById('cylin-height').value;

    // Total surface area

    TotalSurfaceArea = `${ 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.TopSA').textContent = TotalSurfaceArea;
    
    document.querySelector('.Top-param').textContent = param1;



    // base surface area
    BottomSurfaceArea = `${ 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.BottomSA').textContent = BottomSurfaceArea;
    
    document.querySelector('.Bottom-param').textContent = param2;


    // Lateral surface area

    LateralSurfaceArea = `${2 * 3.14 * Baseradius * Height}`;

    document.querySelector('.LateralSA').textContent = LateralSurfaceArea;

    document.querySelector('.Lateral-param').textContent = param2;


    // Total surface area

    TotalSurfaceArea = Number(TotalSurfaceArea + BottomSurfaceArea + LateralSurfaceArea);

    document.querySelector('.LateralSA').textContent = TotalSurfaceArea;

    document.querySelector('.Lateral-param').textContent = param2;

}


function RecTankSurface() {
    selectElement = document.querySelector('#tank-measure1');

    param_type = selectElement.value;

    Length = document.getElementById('tank-length').value;

    width = document.getElementById('tank-width').value;

    Height = document.getElementById('tank-height').value;

    TankSurfaceArea = `${2 *(Length * width + Length * Height + width * Height)}`;

    document.querySelector('.TankSA').textContent = TankSurfaceArea;

    document.querySelector('.Tank-param').textContent = param_type;

}



function CapsuleSurfaceArea() {
    selectElement1 = document.querySelector('#capsule-measure1');
    selectElement2 = document.querySelector('#capsule-measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Baseradius = document.getElementById('capsule_radius').value;

    Height = document.getElementById('capsule_height').value;

    // Total surface area
    TopSurfaceArea = `${ 2 * 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.CapsuleTopSA').textContent = TopSurfaceArea;
    
    document.querySelector('.CapsuleTopParam').textContent = param1;


    //base surface area
    CapsuleBottomSA = `${ 2 * 3.14 * Baseradius * Baseradius}`;

    document.querySelector('.CapsuleBottomSA').textContent = CapsuleBottomSA;
    
    document.querySelector('.CapsuleBottom-param').textContent = param1;


    // Lateral surface area

    CapsuleLateralSA = `${2 * 3.14 * Baseradius * Height}`;

    document.querySelector('.CapsuleLateralSA').textContent = CapsuleLateralSA;

    document.querySelector('.Capsule_Lateral_param').textContent = param2;

    // Total surface area
    CTS = Number(TopSurfaceArea) + Number(CapsuleBottomSA) + Number(CapsuleLateralSA);

    document.querySelector('.CapsuleTotalSA').textContent = CTS;
    
    document.querySelector('.CapsuleTotal-param').textContent = param1;

}



function conicalSurfaceArea() {
    selectElement1 = document.querySelector('#conical_measure1');
    selectElement2 = document.querySelector('#conical_measure2');

    param1 = selectElement1.value;

    param2 = selectElement2.value;

    Topradius = document.getElementById('conicalTop_radius').value;

    bottomRadius = document.getElementById('conicalBottom_radius').value;

    Height = document.getElementById('conical_height').value;

    // Total surface area

    TotalSurfaceArea = `${3.14 * Topradius * Topradius}`;

    document.querySelector('.ConicalTopSA').textContent = TotalSurfaceArea;
    
    document.querySelector('.ConicalTopParam').textContent = param1;



    // base surface area
    BottomSurfaceArea = `${ 3.14 * bottomRadius * bottomRadius}`;

    document.querySelector('.ConicalBottomSA').textContent = BottomSurfaceArea;
    
    document.querySelector('.ConicalBottom_param').textContent = param2;


    // Lateral surface area

    LateralSurfaceArea = `${3.14 * (Number(bottomRadius) + Number(Topradius)) * 
        Math.sqrt((Number(bottomRadius) - Number(Topradius)) **2 + Number(Height) **2)}`;

    document.querySelector('.ConicalLateralSA').textContent = LateralSurfaceArea;

    document.querySelector('.Conical_Lateral_param').textContent = param2;


    // Total surface area

    TotalSurfaceArea = Number(TotalSurfaceArea) + Number(BottomSurfaceArea) + Number(LateralSurfaceArea);

    document.querySelector('.ConicalTotalSA').textContent = TotalSurfaceArea;

    document.querySelector('.ConicalTotal_param').textContent = param2;

}