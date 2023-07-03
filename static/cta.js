const hobercats = ["IMG_0040.webp","IMG_0075.webp","IMG_0094.webp","IMG_0098.webp","IMG_0217.webp","IMG_0421.webp","IMG_0428.webp","IMG_0439.webp","IMG_0476.webp","IMG_0477.webp","IMG_0519.webp","IMG_0579.webp","IMG_0597.webp","IMG_0888.webp","IMG_0896.webp","IMG_0994.webp","IMG_10508.webp","IMG_11040.webp","IMG_1128.webp","IMG_1133.webp","IMG_12116.webp","IMG_1241.webp","IMG_1242.webp","IMG_1757.webp","IMG_2050.webp","IMG_21077.webp","IMG_2112.webp","IMG_2113.webp","IMG_2114.webp","IMG_2174.webp","IMG_2175.webp","IMG_2181.webp","IMG_2185.webp","IMG_2193.webp","IMG_2196.webp","IMG_2217.webp","IMG_2258.webp","IMG_22833.webp","IMG_2308.webp","IMG_2312.webp","IMG_2329.webp","IMG_23903.webp","IMG_25875.webp","IMG_3053.webp","IMG_3054.webp","IMG_30562.webp","IMG_3141.webp","IMG_6754.webp"];
const hobercatsroot = "https://honbra.com/img/cta/"

function freecta(element) {
  element.href = hobercatsroot + hobercats[Math.floor(Math.random() * hobercats.length)]
}
