var wxyt = {
    imgArr: [],// 存放图片数据的数组
    len: null, // 图片的个数
    box_width: null, // 每一张图片对应的进度条宽度
    seletedIndex: 0, // 当前显示图片的下标
    imgShow: document.getElementById('coco'), // 图片显示的容器
    imgToggle: document.getElementById('play_img'), // 播放暂停的切换图片
    imgPlay: document.getElementById('a_play'), // 播放暂停
	imgPrev: document.getElementById('a_prev'), // 上一张
    leftImg: document.getElementById('left_img'), // 上一张按钮里的图片
	imgNext: document.getElementById('a_next'), // 下一张
    rightImg: document.getElementById('right_img'), // 下一张按钮里的图片
    slide: document.getElementById('slide'), // 进度条的容器
    slideCur: document.getElementById('slide_cur'), // 当前进度条
    slideBtn: document.getElementById('slide_btn'), // 进度条上的滑块
    timer: null, // 保存的计时器
    millisec: 400, // 计时器的时间间隔
    togglePlay: true, // 是否处于播放状态
    init: function () {
        /**
         * 先请求图片数据，赋值到 imgArr属性里
         * 将imgArr的length 属性赋值到len属性
         * 通过获取进度条的总长度和图片的个数计算每一张图片的进度条宽度
         * 将图片数组的第一张图片显示在图片容器里
         * 默认是显示第一张图片的，所以此时进度条的进度也要在相应的位置
         * 为上一张按钮添加鼠标移入事件
         * 为上一张按钮添加鼠标移出事件
         * 为下一张按钮添加鼠标移入事件
         * 为下一张按钮添加鼠标移出事件
         * 为上一张 按钮添加点击事件
         * 为播放暂停 按钮添加点击事件
         * 为下一张 按钮添加点击事件
         * 为滑块添加拖拽功能
         * 添加计时器，一定间隔的之后替换图片容器里的图片
         */
        this.imgArr =
        [
            {
                value: '1.jpg'
            },
            {
                value: '2.jpg'
            },
            {
                value: '3.jpg'
            },
            {
                value: '4.jpg'
            },
            {
                value: '5.jpg'
            }
        ];
        this.len = this.imgArr.length;
        this.box_width = Math.ceil(parseFloat(window.getComputedStyle(this.slide).width) / this.len) ;
        this.imgShow.src = this.imgArr[this.seletedIndex]['value'];
        this.fuzhiFn(this.box_width);
        this.imgPrev.onmouseover = (e) => {
            this.leftImg.src = 'l1.png';
        };
        this.imgPrev.onmouseout = (e) => {
            this.leftImg.src = 'l.png';
        };
        this.imgNext.onmouseover = (e) => {
            this.rightImg.src = 'r1.png';
        };
        this.imgNext.onmouseout = (e) => {
            this.rightImg.src = 'r.png';
        };
        this.imgPrev.onclick = (e) =>{
            e.preventDefault();
            this.prevFn();
        };
        this.imgNext.onclick = (e) => {
            e.preventDefault();
        	this.nextFn();
        };
        this.imgToggle.onclick = (e) => {
            e.preventDefault();
        	this.toggleFn();
        };
        this.slideBtn.onmousedown = (e) => {
            /**滑块鼠标按下事件的回调函数
             *  保存document
             *  保存此时滑块距离浏览器的左边的距离
             *  保存滑块当前的进度
             *  保存this的指向
             *  为document绑定鼠标按下移动事件
             *      如果此时处于播放状态，那么暂停播放
             *      将鼠标到滑块起始点的距离保存起来
             *      通过鼠标到滑块起始的距离 / 每一张图片对应的滑块进度 = 当前鼠标对应的第几张图片
             *      如果index 为负数，就将其重置为0 ；如果它大于图片数组的个数 - 1，就将其赋值为 len - 1； 否则不做任何操作
             *      计算当前的进度条宽度
             *      将滑块和进度条显示在对应的位置
             *      将图片显示容器置换为对应的图片
             *  为document绑定鼠标弹起事件
             *      将document的mousemove 和mouseup 的调用方法置为空
             */
            let doc = document;
            let x = e.pageX ? e.pageX : e.clientX;
            let b = parseInt(this.slideBtn.style.left);
            let _this = this;
            if (this.slideBtn.setCapture) {
                this.slideBtn.setCapture();
            } else if (window.captureEvents) {
                window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
            }
            doc.onmousemove = function (e) {
                _this.togglePlay && _this.toggleFn();
                e.pageX ? e.pageX : e.clientX;
                let tx = b + e.pageX - x;
                let index = Math.floor(tx / _this.box_width);
                _this.seletedIndex = index < 0 ? index = 0 :  index > _this.len - 1 ? index = _this.len - 1 : index;
                let currentWidth = _this.box_width * (_this.seletedIndex + 1);
                _this.fuzhiFn(currentWidth);
                _this.imgShow.src = _this.imgArr[_this.seletedIndex]['value'];
            };
            doc.onmouseup = function() {
                if (_this.slideBtn.releaseCapture) {
                    _this.slideBtn.releaseCapture();
                } else if (window.captureEvents) {
                    window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
                }
                doc.onmousemove = null;
                doc.onmouseup = null;
            };
        };
        this.timer = setInterval(this.callback, this.millisec);
    },
    callback: function () {
        /**计时器的回调函数
         * 由于计时器的特殊性，重置this的指向
         * 为图片的下标进行赋值，如果刚好是图片数组的最后一张，就将此属性重置为0；否则自增
         * 根据当前图片的下标计算进度条的宽度
         * 对图片显示容器的图片进行替换
         * 对当前的进度条进行调整
         */
        let _this = this.wxyt;
        _this.seletedIndex == _this.len - 1 ? _this.seletedIndex = 0: _this.seletedIndex += 1;
        let currentWidth = _this.box_width * (_this.seletedIndex + 1);
        _this.imgShow.src = _this.imgArr[_this.seletedIndex]['value'];
        _this.fuzhiFn (currentWidth);
    },
    fuzhiFn: function (currentWidth) {
        /**
         * 进度条宽度的赋值函数
         */
        this.slideCur.style.width = currentWidth + 'px';
        this.slideBtn.style.left =  currentWidth + 'px';
    },
    toggleFn () {
        /**暂停播放按钮点击事件的回调函数
         * 如果当前处于播放状态
         *   先将按钮的图标进行替换
         *   清空计时器，暂停图片的播放
         *  否则，当前处于停止状态
         *    先将按钮的图标进行替换
         *    再重启定时器
         * 将播放状态的判断参数置反
         */
        if ( this.togglePlay ){
            this.imgToggle.src = 'play.png';
            clearInterval(this.timer);
        } else {
            this.imgToggle.src = 'pause.png';
            this.timer = setInterval(this.callback, this.millisec);
        }
        this.togglePlay = !this.togglePlay;
    },
    prevFn: function () {
        /**上一张按钮的回调函数
         * 先清空定时器，暂停图片的播放
         * 如果当前处于播放状态，先将播放暂停按钮的图标进行替换，再将播放状态的判断参数进行置反；否则什么都不做
         * 对当前图片的下标进行判断，如果是已经是第一张图片，那么将图片切换到最后一张图片；否则将图片的下标递减
         * 计算当前图片对应的进度条宽度
         * 将进度条重置到对应的位置
         * 最后将图片显示容器的图片进行置换
         */
        clearInterval(this.timer);
        this.togglePlay && (this.imgToggle.src = 'play.png', this.togglePlay = false);
        this.seletedIndex == 0 ? this.seletedIndex = this.len - 1 : this.seletedIndex -= 1;
        let currentWidth = this.box_width * (this.seletedIndex + 1);
        this.fuzhiFn (currentWidth);
        this.imgShow.src = this.imgArr[this.seletedIndex]['value'];
    },
    nextFn: function () {
        /**下一张按钮的回调函数
         * 先清空定时器，暂停图片的播放
         * 如果当前处于播放状态，先将播放暂停按钮的图标进行替换，再将播放状态的判断参数进行置反；否则什么都不做
         * 对当前图片的下标进行判断，如果是已经是最后一张图片，那么将图片切换到第一张图片；否则将图片的下标递增
         * 计算当前图片对应的进度条宽度
         * 将进度条重置到对应的位置
         * 最后将图片显示容器的图片进行置换
         */
        clearInterval(this.timer);
        this.togglePlay && (this.imgToggle.src = 'play.png', this.togglePlay = false);
        this.seletedIndex == this.len - 1 ? this.seletedIndex = 0 : this.seletedIndex += 1;
        let currentWidth = this.box_width * (this.seletedIndex + 1);
        this.fuzhiFn (currentWidth);
        this.imgShow.src = this.imgArr[this.seletedIndex]['value'];
    }
};
wxyt.init();