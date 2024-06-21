const photoSlideShow = {
    photoList: ['photo1', 'photo2', 'photo3', 'photo4'],
    currentPhotoIndex: 0,
    
    nextPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log(`Current photo: ${this.photoList[this.currentPhotoIndex]}`);
        } else {
            console.log("End of slideshow");
        }
    },

    prevPhoto() {
        if (this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex--;
            console.log(`Current photo: ${this.photoList[this.currentPhotoIndex]}`);
        } else {
            console.log("End of slideshow");
        }
    },

    getCurrentPhoto() {
        return this.photoList[this.currentPhotoIndex];

}
}

console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.nextPhoto();
console.log(photoSlideShow.getCurrentPhoto());
photoSlideShow.prevPhoto();
console.log(photoSlideShow.getCurrentPhoto());
