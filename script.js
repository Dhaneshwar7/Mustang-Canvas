function okay() {
	gsap.registerPlugin(ScrollTrigger);

	// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

	const locoScroll = new LocomotiveScroll({
		el: document.querySelector('#main'),
		smooth: true,
		multiplier: 0.05,
	});
	// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
	locoScroll.on('scroll', ScrollTrigger.update);

	// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
	ScrollTrigger.scrollerProxy('#main', {
		scrollTop(value) {
			return arguments.length
				? locoScroll.scrollTo(value, 0, 0)
				: locoScroll.scroll.instance.scroll.y;
		}, // we don't have to define a scrollLeft because we're only scrolling vertically.
		getBoundingClientRect() {
			return {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight,
			};
		},
		// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
		pinType: document.querySelector('#main').style.transform
			? 'transform'
			: 'fixed',
	});

	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
	ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
	ScrollTrigger.refresh();
}
okay();

function canvasStart() {
	const canvas = document.querySelector('canvas');
	const context = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	window.addEventListener('resize', function () {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		render();
	});

	function files(index) {
		var data = `./pg1img/mustang_0001.jpeg
      ./pg1img/mustang_0002.jpeg
      ./pg1img/mustang_0003.jpeg
      ./pg1img/mustang_0004.jpeg
      ./pg1img/mustang_0005.jpeg
      ./pg1img/mustang_0006.jpeg
      ./pg1img/mustang_0007.jpeg
      ./pg1img/mustang_0008.jpeg
      ./pg1img/mustang_0009.jpeg
      ./pg1img/mustang_0010.jpeg
      ./pg1img/mustang_0011.jpeg
      ./pg1img/mustang_0012.jpeg
      ./pg1img/mustang_0013.jpeg
      ./pg1img/mustang_0014.jpeg
      ./pg1img/mustang_0015.jpeg
      ./pg1img/mustang_0016.jpeg
      ./pg1img/mustang_0017.jpeg
      ./pg1img/mustang_0018.jpeg
      ./pg1img/mustang_0019.jpeg
      ./pg1img/mustang_0020.jpeg
      ./pg1img/mustang_0021.jpeg
      ./pg1img/mustang_0022.jpeg
      ./pg1img/mustang_0023.jpeg
      ./pg1img/mustang_0024.jpeg
      ./pg1img/mustang_0025.jpeg
      ./pg1img/mustang_0026.jpeg
      ./pg1img/mustang_0027.jpeg
      ./pg1img/mustang_0028.jpeg
      ./pg1img/mustang_0029.jpeg
      ./pg1img/mustang_0030.jpeg
      ./pg1img/mustang_0031.jpeg
      ./pg1img/mustang_0032.jpeg
      ./pg1img/mustang_0033.jpeg
      ./pg1img/mustang_0034.jpeg
      ./pg1img/mustang_0035.jpeg
      ./pg1img/mustang_0036.jpeg
      ./pg1img/mustang_0037.jpeg
      ./pg1img/mustang_0038.jpeg
      ./pg1img/mustang_0039.jpeg
      ./pg1img/mustang_0040.jpeg
      ./pg1img/mustang_0041.jpeg
      ./pg1img/mustang_0042.jpeg
      ./pg1img/mustang_0043.jpeg
      ./pg1img/mustang_0044.jpeg
      ./pg1img/mustang_0045.jpeg
      ./pg1img/mustang_0046.jpeg
      ./pg1img/mustang_0047.jpeg
      ./pg1img/mustang_0048.jpeg
      ./pg1img/mustang_0049.jpeg
      ./pg1img/mustang_0050.jpeg
      ./pg1img/mustang_0051.jpeg
      ./pg1img/mustang_0052.jpeg
      ./pg1img/mustang_0053.jpeg
      ./pg1img/mustang_0054.jpeg
      ./pg1img/mustang_0055.jpeg
      ./pg1img/mustang_0056.jpeg
      ./pg1img/mustang_0057.jpeg
      ./pg1img/mustang_0058.jpeg
      ./pg1img/mustang_0059.jpeg
      ./pg1img/mustang_0060.jpeg
      ./pg1img/mustang_0061.jpeg
      ./pg1img/mustang_0062.jpeg
      ./pg1img/mustang_0063.jpeg
      ./pg1img/mustang_0064.jpeg
      ./pg1img/mustang_0065.jpeg
      ./pg1img/mustang_0066.jpeg
      ./pg1img/mustang_0067.jpeg
      ./pg1img/mustang_0068.jpeg
      ./pg1img/mustang_0069.jpeg
      ./pg1img/mustang_0070.jpeg
      ./pg1img/mustang_0071.jpeg
      ./pg1img/mustang_0072.jpeg
      ./pg1img/mustang_0073.jpeg
      ./pg1img/mustang_0074.jpeg
      ./pg1img/mustang_0075.jpeg
      ./pg1img/mustang_0076.jpeg
      ./pg1img/mustang_0077.jpeg
      ./pg1img/mustang_0078.jpeg
      ./pg1img/mustang_0079.jpeg
      ./pg1img/mustang_0080.jpeg
      ./pg1img/mustang_0081.jpeg
      ./pg1img/mustang_0082.jpeg
      ./pg1img/mustang_0083.jpeg
      ./pg1img/mustang_0084.jpeg
      ./pg1img/mustang_0085.jpeg
      ./pg1img/mustang_0086.jpeg
      ./pg1img/mustang_0087.jpeg
      ./pg1img/mustang_0088.jpeg
      ./pg1img/mustang_0089.jpeg
      ./pg1img/mustang_0090.jpeg
      ./pg1img/mustang_0091.jpeg
      ./pg1img/mustang_0092.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0093.jpeg
      ./pg1img/mustang_0094.jpeg
      ./pg1img/mustang_0095.jpeg
      ./pg1img/mustang_0096.jpeg
      ./pg1img/mustang_0096.jpeg
      ./pg1img/mustang_0097.jpeg
      ./pg1img/mustang_0097.jpeg
      ./pg1img/mustang_0098.jpeg
      ./pg1img/mustang_0098.jpeg
      ./pg1img/mustang_0099.jpeg
      ./pg1img/mustang_0099.jpeg
      ./pg1img/mustang_0100.jpeg
      ./pg1img/mustang_0100.jpeg
      ./pg1img/mustang_0101.jpeg
      ./pg1img/mustang_0101.jpeg
      ./pg1img/mustang_0102.jpeg
      ./pg1img/mustang_0102.jpeg
      ./pg1img/mustang_0103.jpeg
      ./pg1img/mustang_0103.jpeg
      ./pg1img/mustang_0104.jpeg
      ./pg1img/mustang_0104.jpeg
      ./pg1img/mustang_0105.jpeg
      ./pg1img/mustang_0105.jpeg
      ./pg1img/mustang_0106.jpeg
      ./pg1img/mustang_0106.jpeg
      ./pg1img/mustang_0107.jpeg
      ./pg1img/mustang_0107.jpeg
      ./pg1img/mustang_0107.jpeg
      ./pg1img/mustang_0108.jpeg
      ./pg1img/mustang_0108.jpeg
      ./pg1img/mustang_0109.jpeg
      ./pg1img/mustang_0109.jpeg
      ./pg1img/mustang_0109.jpeg
      ./pg1img/mustang_0110.jpeg
      ./pg1img/mustang_0110.jpeg
      ./pg1img/mustang_0111.jpeg
      ./pg1img/mustang_0111.jpeg
      ./pg1img/mustang_0112.jpeg
      ./pg1img/mustang_0112.jpeg
      ./pg1img/mustang_0113.jpeg
      ./pg1img/mustang_0113.jpeg
      ./pg1img/mustang_0114.jpeg
      ./pg1img/mustang_0114.jpeg
      ./pg1img/mustang_0115.jpeg
      ./pg1img/mustang_0115.jpeg
      ./pg1img/mustang_0116.jpeg
      ./pg1img/mustang_0116.jpeg
      ./pg1img/mustang_0117.jpeg
      ./pg1img/mustang_0117.jpeg
      ./pg1img/mustang_0118.jpeg
      ./pg1img/mustang_0118.jpeg
      ./pg1img/mustang_0119.jpeg
      ./pg1img/mustang_0119.jpeg
      ./pg1img/mustang_0120.jpeg
      ./pg1img/mustang_0120.jpeg
      ./pg1img/mustang_0121.jpeg
      ./pg1img/mustang_0121.jpeg
      ./pg1img/mustang_0122.jpeg
      ./pg1img/mustang_0122.jpeg
      ./pg1img/mustang_0123.jpeg
      ./pg1img/mustang_0123.jpeg
      ./pg1img/mustang_0124.jpeg
      ./pg1img/mustang_0124.jpeg
      ./pg1img/mustang_0125.jpeg
      ./pg1img/mustang_0125.jpeg
      ./pg1img/mustang_0126.jpeg
      ./pg1img/mustang_0126.jpeg
      ./pg1img/mustang_0127.jpeg
      ./pg1img/mustang_0127.jpeg
      ./pg1img/mustang_0128.jpeg
      ./pg1img/mustang_0128.jpeg
      ./pg1img/mustang_0129.jpeg
      ./pg1img/mustang_0129.jpeg
      ./pg1img/mustang_0130.jpeg
      ./pg1img/mustang_0130.jpeg
      ./pg1img/mustang_0131.jpeg
      ./pg1img/mustang_0131.jpeg
      ./pg1img/mustang_0132.jpeg
      ./pg1img/mustang_0132.jpeg
      ./pg1img/mustang_0133.jpeg
      ./pg1img/mustang_0133.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0134.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0135.jpeg
      ./pg1img/mustang_0136.jpeg
      ./pg1img/mustang_0136.jpeg
      ./pg1img/mustang_0136.jpeg
      ./pg1img/mustang_0136.jpeg
      ./pg1img/mustang_0137.jpeg
      ./pg1img/mustang_0137.jpeg
      ./pg1img/mustang_0137.jpeg
      ./pg1img/mustang_0138.jpeg
      ./pg1img/mustang_0138.jpeg
      ./pg1img/mustang_0138.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      ./pg1img/mustang_0139.jpeg
      `;
		return data.split('\n')[index];
	}

	const frameCount = 250;

	const images = [];
	const imageSeq = {
		frame: 0,
	};

	for (let i = 0; i < frameCount; i++) {
		const img = new Image();
		img.src = files(i);
		images.push(img);
	}

	gsap.to(imageSeq, {
		frame: frameCount - 1,
		snap: 'frame',
		ease: 'none',
		scrollTrigger: {
			scroller: '#main',
			scrub: 2,
			trigger: '#home',
			pin: true,
			start: 'top top',
			// markers:true
		},
		onUpdate: render,
	});

	images[0].onload = render;

	function render() {
		scaleImage(images[imageSeq.frame], context);
	}

	function scaleImage(img, ctx) {
		var canvas = ctx.canvas;
		var hRatio = canvas.width / img.width;
		var vRatio = canvas.height / img.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 1.8;
		var centerShift_y = (canvas.height - img.height * ratio) / 1.8;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}
}
canvasStart();

//   gsap.to("#mcanvas", {
//     frame: frameCount - 1,
//     snap: "frame",
//     ease: "none",
//     scrollTrigger: {
//     scroller:"#main",
//     scrub: 0.5,
//       trigger:"#home",
//       pin:true,
//       start:"top top",
//       markers:true
//     },
//     onUpdate: render
// });

// var canTimline = gsap.timeline({
//   scrollTrigger:{
//     trigger: "#home",
//     scroller: "#main",
//     scrub: true,
//     // markers:true,
//     start: "top 50%",
//     // end:"+=20%",
//     onUpdate: self => console.log(self.direction)
//   },
// })

// canTimline.from('#mcanvas', {
// 	scale: 2,
// });

// gsap.from('#mcanvas',{
//   scrollTrigger:{
//     trigger: "#home",
//     scroller: "#main",
//     scrub: true,
//     markers:true,
//     start: "top 50%",
//     // end:"+=20%",
//     onUpdate: self => console.log(self.direction)
//   },
// })




var can = document.querySelector('#mcanvas').getBoundingClientRect();
// alert(can.width)

console.log(can);

var newtl = gsap.timeline();

newtl.to('#home', {
	scrollTrigger: {
		trigger: '#home',
		scroller: '#main',
		scrub: true,
		markers: true,
		start: 'top 50%',
    end:"top 5%"
	},
})
.to("mcanvas",{
  scale:2,
})