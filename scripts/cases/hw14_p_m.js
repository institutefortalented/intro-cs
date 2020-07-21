let hw14_m_cases = {
    1: [
        [`rect_peri(1, 1)`, 4],
        [`rect_peri(0.5, 2)`, 5],
        [`rect_peri(${r1}, ${r2})`, 2*r1+2*r2]
    ],
    2: [
        [`rect_area(1, 1)`, 1],
        [`rect_area(0.5, 2)`, 1],
        [`rect_area(${r1}, ${r2})`, r1*r2]
    ],
    3: [
        [`square_peri(1)`, 4],
        [`square_peri(0.25)`, 1],
        [`square_peri(${r1})`, 4*r1]
    ],
    4: [
        [`square_area(1)`, 1],
        [`square_area(0.5)`, 0.25],
        [`square_area(0${r2})`, r2*r2]
    ],
    5: [
        [`triangle_area(2, 1)`, 1],
        [`triangle_area(0.5, 6)`, 1.5],
        [`triangle_area(${r2}, ${r1})`, r1*r2/2]
    ],
    6: [
        [`circle_area(1)`, Math.PI],
        [`circle_area(0.5)`, Math.PI*0.25],
        [`circle_area(${r1})`, Math.PI*r1*r1]
    ],
    7: [
        [`prism_vol(1, 1, 1)`, 1],
        [`prism_vol(0.25, 4, 9)`, 9],
        [`prism_vol(${r3}, ${r2}, ${r1})`, r1*r2*r3]
    ],
    8: [
        [`cube_vol(1)`, 1],
        [`cube_vol(0.5)`, 0.125],
        [`cube_vol(${r2})`, r2*r2*r2]
    ],
    9: [
        [`cylinder_vol(1, 1)`, Math.PI],
        [`cylinder_vol(0.5, 8)`, Math.PI*2],
        [`cylinder_vol(${r2}, ${r1})`, Math.PI*r2*r2*r1]
    ],
    10: [
        [`cone_vol(1, 1)`, Math.PI/3],
        [`cone_vol(3, 4)`, Math.PI*12],
        [`cone_vol(${r1}, ${r2})`, Math.PI*r1*r1*r2/3]
    ]
};
