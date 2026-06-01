describe("Gilded Rose", function () {
  beforeEach(function () {
    items = [];
  });

  it("decreases sell_in and quality for a normal item", function () {
    items.push(new Item("Normal Item", 10, 20));

    update_quality();

    expect(items[0].sell_in).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("does not decrease quality below 0", function () {
    items.push(new Item("Normal Item", 10, 0));

    update_quality();

    expect(items[0].quality).toBe(0);
  });

  it("increases quality for Aged Brie", function () {
    items.push(new Item("Aged Brie", 2, 0));

    update_quality();

    expect(items[0].sell_in).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it("does not increase Aged Brie quality above 50", function () {
    items.push(new Item("Aged Brie", 2, 50));

    update_quality();

    expect(items[0].quality).toBe(50);
  });

  it("does not change Sulfuras", function () {
    items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));

    update_quality();

    expect(items[0].sell_in).toBe(0);
    expect(items[0].quality).toBe(80);
  });
});