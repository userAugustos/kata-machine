import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    let idx = Math.floor(Math.random() * 100);
    const data = new Array(100).fill(false);

    for (let i = idx; i < 100; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(21).fill(false))).toEqual(-1);
});

