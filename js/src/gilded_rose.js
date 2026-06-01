function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    update_item(items[i]);
  }
}

function update_item(item) {
  if (item.name == "Sulfuras, Hand of Ragnaros") {
    return;
  }

  update_quality_for_item(item);
  item.sell_in = item.sell_in - 1;

  if (item.sell_in < 0) {
    update_expired_item(item);
  }
}

function update_quality_for_item(item) {
  if (item.name == "Aged Brie") {
    increase_quality(item);
  } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    update_backstage_pass(item);
  } else if (item.name == "Conjured Mana Cake") {
    decrease_quality(item);
    decrease_quality(item);
  } else {
    decrease_quality(item);
  }
}

function update_expired_item(item) {
  if (item.name == "Aged Brie") {
    increase_quality(item);
  } else if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
    item.quality = 0;
  } else if (item.name == "Conjured Mana Cake") {
    decrease_quality(item);
    decrease_quality(item);
  } else {
    decrease_quality(item);
  }
}

function update_backstage_pass(item) {
  increase_quality(item);

  if (item.sell_in < 11) {
    increase_quality(item);
  }

  if (item.sell_in < 6) {
    increase_quality(item);
  }
}

function increase_quality(item) {
  if (item.quality < 50) {
    item.quality = item.quality + 1;
  }
}

function decrease_quality(item) {
  if (item.quality > 0) {
    item.quality = item.quality - 1;
  }
}