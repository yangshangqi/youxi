function Bird(info) {
    //x, y是小鸟的坐标
    this.x = info.x;
    this.y = info.y;
    //小鸟的图片资源
    this.image = info.image;
    this.ctx = info.ctx;
    //小鸟的原始速度
    this.speed = 0;
    //加速度
    this.aspeed = 0.0004;
    //最大角度和最大速度
    this.masAngle = 45;
    this.maxSpeed = 0.6;

    //小鸟的状态的图片的index
    this.index = 0;
    //上一帧的时间
    this.lastTime = new Date();
}

Bird.prototype = {
    constructor: Bird,

    draw: function () {
        //1. 获得时间差
        //获取当前帧的时间
        var currentTime = new Date();
        //时间差
        var deltaTime = currentTime - this.lastTime;
        //当currentTime设为lastTime作为下一帧的初始时间
        this.lastTime = currentTime;

        //2. 计算出小鸟的垂直方向的移动距离
        this.y += this.speed * deltaTime + this.aspeed * deltaTime * deltaTime / 2;

        //3. 算出小鸟当前帧的速度（下一帧起始速度）
        this.speed += this.aspeed * deltaTime;

        //4. 小鸟捕翅膀
        this.index += 1;

        //5. 小鸟的旋转
        var birdWidth = this.image.width/3;
        var birdHeight = this.image.height;

        //保存ctx的状态
        this.ctx.save();
        //平移座标系
        this.ctx.translate(this.x + birdWidth/2, this.y + birdHeight/2);
        //计算小鸟的角度
        var angle = this.speed/this.maxSpeed * this.masAngle;
        //弧度
        var radian = angle / 180 * Math.PI;
        //旋转坐标系
        this.ctx.rotate(radian);

        //6. 画小鸟
        this.ctx.drawImage(this.image, this.index%3*birdWidth, 0, birdWidth, birdHeight,
            -birdWidth/2, -birdHeight/2, birdWidth, birdHeight);

        this.ctx.restore();
    }
}