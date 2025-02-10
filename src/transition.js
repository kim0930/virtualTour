/**
 * Describes a clickable object in a location that allows users to navigate between locations.
 * @param {Object} parameters Object with fields: panoImg, targetLocation, tooltip, position, etc.
 * @constructor
 */


class Transition extends THREE.Mesh {
    constructor(parameters = {}) {
		const hotspotGeometry = new THREE.SphereGeometry(15, 15, 15);
		const hotspotTexture = new THREE.TextureLoader().load(parameters.targetLocation_image);
		const hotspotMaterial = new THREE.MeshBasicMaterial({ map: hotspotTexture, side: THREE.FrontSide });
		
		super(hotspotGeometry, hotspotMaterial);
		
        this.position.set(parameters.position.x, parameters.position.y, parameters.position.z);
		this.userData = { target: parameters.target };
		
		this.panoImg = parameters.panoImg || "";
        this.targetLocation = parameters.targetLocation ?? -1;
        this.tooltip = parameters.tooltip || null;
    };
	

    onClick(event) {
        if (this.targetLocation > -1) {
            console.log(`Navigating to location: ${this.targetLocation}`);
            transitToLocation(this.targetLocation);
        } else {
            console.log("error: targetLocation not specified!!!");
        }
    }
}




/**
class Transition extends THREE.Mesh {
    constructor(parameters = {}) {
        var geometry = new THREE.PlaneGeometry(15, 15);
        var material = new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("resources/icons/transfer.png"),
            transparent: true
        });

        super(geometry, material);
		
        this.panoImg = parameters.panoImg || "";
        this.targetLocation = parameters.targetLocation ?? -1;
        this.tooltip = parameters.tooltip || null;

        this.position.set(parameters.position.x, parameters.position.y, parameters.position.z);

        // 클릭 이벤트를 위한 userData 설정
        this.userData.isClickable = true;
    };
	

    onClick(event) {
        if (this.targetLocation > -1) {
            console.log(`Navigating to location: ${this.targetLocation}`);
            transitToLocation(this.targetLocation);
        } else {
            console.log("error: targetLocation not specified!!!");
        }
    }
}
*/