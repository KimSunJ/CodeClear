axios
  .post("/api/product", { data: "채소" })
  .then((data) => {
    console.log(data);
    console.log(data.data[1].img);
    getList(
      data.data[1].img,
      data.data[1].delivery,
      data.data[1].name,
      data.data[1].description,
      data.data[1].price,
      data.data[1].manufacturer,
      data.data[1].package,
      data.data[1].unit,
      data.data[1].weight,
      data.data[1].origin
    );
  })
  .catch((err) => {
    console.error(err);
  });

const itemList = document.getElementById("item-image");
const itemDelivery = document.getElementById("item-delivery");
const itemName = document.getElementById("item-name");
const itemDes = document.getElementById("item-des");
const itemPrice = document.getElementById("item-price");
const itemSales = document.getElementById("item-sales");
const itemPack = document.getElementById("item-package");
const itemUnit = document.getElementById("item-unit");
const itemWeight = document.getElementById("item-weight");
const itemOrigin = document.getElementById("item-origin");
const itemSelect = document.getElementById("item-select");
const itemSelectPrice = document.getElementById("item-select-price");
const itemMinus = document.getElementById("item-Minus");
const itemPlus = document.getElementById("item-Plus");
const itemEa = document.getElementById("item-count");
const itemTotal = document.getElementById("item-total-price");
const cartDamgi = document.getElementById("cart-damgi");

async function getList(
  img,
  delivery,
  name,
  description,
  price,
  manufacturer,
  package,
  unit,
  weight,
  origin
) {
  try {
    const itemDiv = document.createElement("div");
    const itemImg = document.createElement("img");
    const itemInfoP = document.createElement("p");
    const itemInfoh2 = document.createElement("h2");
    const itemInfo2P = document.createElement("p");
    const itemPrice_h2 = document.createElement("h2");
    const itemSaleP = document.createElement("p");
    const itemPackP = document.createElement("p");
    const itemUnitP = document.createElement("p");
    const itemWeightP = document.createElement("p");
    const itemOriginP = document.createElement("p");
    const itemSelectSpan = document.createElement("span");
    const itemSelectPrice = document.createElement("span");
    const itemSelectPriceSpan = document.createElement("span");
    const itemTotalPrice = document.createElement("span");

    itemImg.style = `
    width:420px;
    hight:920px;`;
    itemImg.src = `/api/product/download${img}`;
    itemInfoP.innerText = `${delivery}`;
    itemInfoh2.innerText = `${name}`;
    itemInfo2P.innerText = `${description}`;
    itemPrice_h2.innerText = `${price}원`;
    itemSaleP.innerText = `${manufacturer}`;
    itemPackP.innerText = `${package}`;
    itemUnitP.innerText = `${unit}`;
    itemWeightP.innerText = `${weight}`;
    itemOriginP.innerText = `${origin}`;
    itemSelectSpan.innerText = `${name}`;
    itemSelectPrice.innerText = `${price}원`;
    itemSelectPriceSpan.innerText = `${price}원`;

    itemSelect.append(itemSelectPrice);
    itemSelect.append(itemSelectSpan);
    itemOrigin.append(itemOriginP);
    itemWeight.append(itemWeightP);
    itemUnit.append(itemUnitP);
    itemPack.append(itemPackP);
    itemSales.append(itemSaleP);
    itemPrice.append(itemPrice_h2);
    itemDes.append(itemInfo2P);
    itemName.append(itemInfoh2);
    itemDelivery.append(itemInfoP);
    itemDiv.append(itemImg);
    itemList.append(itemDiv);

    let count = 0;
    itemPlus.onclick = () => {
      count++;
      itemEa.innerText = count;
      itemTotalPrice.innerText = `총 상품금액: ${price * count} 원`;

      itemTotal.append(itemTotalPrice);
    };

    itemMinus.onclick = () => {
      if (count > 1) {
        count--;
        itemEa.innerText = count;
        itemTotalPrice.innerText = `총 상품금액: ${price * count} 원`;

        itemTotal.append(itemTotalPrice);
      }
    };

    itemMinus.onclick = () => {
      if (count > 1) {
        count--;
        itemEa.innerText = count;
        itemTotalPrice.innerText = `총 상품금액: ${price * count} 원`;

        itemTotal.append(itemTotalPrice);
      }
    };
  } catch (error) {
    console.log(error);
  }
}
