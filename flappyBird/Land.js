function Land(info) {
    this.x = info.x;
    this.y = info.y;
    this.canvas = info.canvas;
    this.ctx = info.ctx;
    this.image = info.image;

    this.speed = -2;
}

Land.prototype = {
    constructor: Land,
    draw: function () {
        //移动x方向的位置
        this.x += this.speed;
        //判断是否走出舞台，如果走出舞台，就接到其它的陆地对象的后面
        if (this.x <= -this.canvas.width/4) {
            this.x = this.canvas.width;
        }
        //绘制
        /*
        * 绘制图片的五参模式：第个参数，要绘制的图片，第二三个参数，图片绘制的起始位置， 最后两个参数，图片在画布上的宽高。
        * */
        this.ctx.drawImage(this.image, this.x, this.y, this.canvas.width/4, this.canvas.height-this.y);
    }
}