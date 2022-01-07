input.onButtonPressed(Button.A, function () {
    turtle.forward(1)
})
input.onGesture(Gesture.Shake, function () {
    turtle.forward(1)
    turtle.turnRight()
})
input.onButtonPressed(Button.AB, function () {
    turtle.turnLeft()
    turtle.forward(1)
})
input.onButtonPressed(Button.B, function () {
    turtle.back(1)
})
turtle.pen(TurtlePenMode.Down)
