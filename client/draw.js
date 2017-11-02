document.addEventListener('DOMContentLoaded', function () {
    var c = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var circleArray = [];
    var ctx = c.getContext('2d');

    function Circle(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius
        this.colorArray = ['rgba(100, 0, 230, 0.5', 'rgba(30, 100, 230, 0.5)', 'rgba(230, 0, 175, 0.5)'];
        this.choiceColor = Math.floor(Math.random() * 3); 
        this.randomColor = this.colorArray[this.choiceColor];
        
        this.draw = function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.strokeStyle = this.randomColor;
            ctx.stroke();
            ctx.fillStyle = this.randomColor;
            ctx.fill();
        }
        this.update = function(){
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }

    for (var i = 0; i < 100; i++) {
        var radius = Math.random() * 50;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x, y, dx, dy, radius))
    }
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);    
        for (var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }   
    }
    animate();
});