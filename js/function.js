const $indicator = $('.menu > ul > li > a');
const $container = $('.slides-container');

let nowIdx = 0;

const moveFn = function () {
	$container.animate({ left: -478 * nowIdx }, 'easeInOut').delay(600);

	//활성화 표시
	$indicator.eq(nowIdx).parent().addClass('on');
	$indicator.eq(nowIdx).parent().siblings().removeClass('on');
};

$indicator.on('click', function (evt) {
	evt.preventDefault();

	nowIdx = $indicator.index(this);

	moveFn();
});

//다음
$('.slides-next').on('click', function (evt) {
	evt.preventDefault();

	if (nowIdx < 5) {
		nowIdx++;
	} else {
		nowIdx = 0;
	}

	console.log(`nowIdx=${nowIdx}`);

	moveFn();
});

//이전
$('.slides-prev').on('click', function (evt) {
	evt.preventDefault();

	if (nowIdx > 0) {
		nowIdx--;
	} else {
		nowIdx = 5;
	}

	console.log(`nowIdx=${nowIdx}`);

	moveFn();
});
