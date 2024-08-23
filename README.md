
<div class="container">
  <div class="name">MALIK MEHTAB</div>
  <div class="band"></div>
</div>

container{
  position: relative;
  width: 300px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

name{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

band{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 10px solid transparent;
  border-top-color: #ff0000;
  border-right-color: #00ff00;
  border-bottom-color: #0000ff;
  border-left-color: #ffff00;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
