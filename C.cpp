#include <iostream>
namespace using std;

class circle {
    int radius;
    double getArea();
    circle ();
    circle (int r);
};

circle :: circle() {
    radius = 2;
    cout << radius << "의 반지름을 갖는 원 생성" << endl;
}

circle :: circle(int r) {
    radius = r;
    cout << radius << "의 반지름을 갖는 원 생성" << endl;
}

double circle::getArea() {
    return 3.14*radius*radius;
}

int main() {
    circle donut;
    double area = getArea();
    cout << "donut의 면적은: " << area << endl;

    circle pizza(30);
    double area = getArea();
    cout << "pizza의 면적은: " << area << endl;
}