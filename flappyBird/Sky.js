function Sky(info) {
    //天空的水平方向的位置
    this.x = info.x;
    //画布
    this.canvas = info.canvas;
    //画图工具
    this.ctx = info.ctx;
    //图片资源
    this.image = info.image;
    //移动的速度
    this.speed = -2;
}

Sky.prototype = {
    constructor: Sky,
    draw: function () {
        //每一帧都去修改x的位置
        this.x += this.speed;

        //判断是否走出舞台
        if (this.x <= -this.canvas.width) {
            this.x = this.canvas.width;
        }

        //绘制
        this.ctx.drawImage(this.image, this.x, 0, this.canvas.width, this.canvas.height);
    },

    test: function () {
        /*
        * 昨天西风调碧树，独上高楼，望尽天涯路。小楼昨夜又东风，故国不堪回首月明中
        * 你说你还是喜欢孤单，其实你怕被我看穿，你把属于我们的船，飘飘荡荡靠不了岸，事到如令没有答案
        * */
    }

}