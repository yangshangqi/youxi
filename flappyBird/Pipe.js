function Pipe(info) {
    this.x = info.x;
    this.bottomy = info.bottomy;
    this.canvas = info.canvas;
    this.ctx = info.ctx;
    this.topImage = info.topImage;
    this.bottomImage = info.bottomImage;
    this.gap = info.gap;
    this.topHeight = 0;
    this.bottomHeight = 0;
    this.speed = -2;

    //在对象创建时，就来计算管道的随机高度
    this.initHeight();
}

Pipe.prototype = {
    constructor: Pipe,
    draw: function () {
        //1. 移动x的位置
        this.x += this.speed;

        //2. 判断是否已经移出边界
        if (this.x <= -this.topImage.width) {
            this.x = this.canvas.width - this.topImage.width + this.gap;
        }

        //3. 绘制管道
        //在玻璃纸上把柱子所在区域的路径绘制出来，但是不执行stroke,这样路径是看不到的；
        ctx.rect(this.x, 0, this.topImage.width, this.topHeight);
        ctx.rect(this.x, this.topHeight + 100,
            this.bottomImage.width, this.bottomHeight);

        //先绘制上面的管道
        this.ctx.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);

        //再绘制下面的管道
        this.ctx.drawImage(this.bottomImage,
            this.x, this.topHeight + 100,
            this.bottomImage.width, this.bottomHeight);
    },

    //计算随机的管道的管道的高度
    initHeight: function () {
        //随机算出上面的管道的高度
        this.topHeight = Math.random() * 150 + 100;
        //算出下面的管道的高度
        this.bottomHeight = this.canvas.height - this.topHeight - 100 - this.bottomy;
    }


}