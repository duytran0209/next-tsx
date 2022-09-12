import type { NextApiRequest, NextApiResponse } from "next";
import { Blogs } from "../../models/blogs";
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Blogs[]>
): void {
  res.status(200).json([
    {
      name: "The Energiser* Caramel Latte with Vitamin B12 & Zinc",
      url: "https://www.costa.co.uk/static/pim/1/2/a/4/12a4f92762b9c4426ef509cfcb0df568a7ade918_Latte_Caramel_Oat_Thumb.jpg",
      id: 1,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our classic latte made using Oat dairy alternative, deliciously flavoured with a rich caramel syrup, with added vitamin B12 & zinc.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/4/7/9/5/47956c8cd24e1a34517bb62da673882c88781702_Latte_Caramel_Oat_Product.jpg",
    },
    {
      name: "The Power** Hazelnut Latte with protein",
      url: "https://www.costa.co.uk/static/pim/f/0/2/e/f02ed735da71c464a03c49fcf6a2e809d7fdc1cd_Latte_Hazelnut_Almond_Thumb.jpg",
      id: 2,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our classic Latte made using almond dairy alternative, deliciously flavoured with an indulgent roasted hazelnut syrup, with added protein.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/2/7/9/1/2791791562f4cf3b3f714e16d8fdcac2b85bbd1d_Latte_Hazelnut_Almond_Product.jpg",
    },
    {
      name: "The Energiser* Vanilla Latte with Vitamin B12 & Zinc",
      url: "https://www.costa.co.uk/static/pim/9/2/5/3/9253a5040e234e17a10fa21d7e03b3666fc5e7cc_Latte_Vanilla_Coconut_Thumb.jpg",
      id: 3,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our classic Latte made using coconut dairy alternative, deliciously flavoured with a luscious vanilla syrup, with added vitamin B12 & zinc",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/3/3/9/0/3390628ec4e10681870b67db6ad1779eb523c07a_Latte_Vanilla_Coconut_Product.jpg",
    },
    {
      name: "Latte",
      url: "https://www.costa.co.uk/static/pim/4/4/2/f/442f30d07de52a00aefb8990ce8982b9874bd238_Latte_Thumb.jpg",
      id: 4,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our signature blend espresso with steamed milk for a smooth and creamy coffee.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/1/b/1/c/1b1c0b734abf0294d0b8dd5be87c76600fd2d86a_Latte.jpg",
    },
    {
      name: "Cappuccino",
      url: "https://www.costa.co.uk/static/pim/6/7/2/0/6720302656ef87ab8934f72e3c4348d8ede7c36c_spiced_cappuccino_thumb.jpg",
      id: 5,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Made with our aromatic Espresso, frothy milk and decadent chocolate dusting.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/1/0/a/0/10a02752569bcb4fa382d564fd67bc94ed2f3ef9_cappuccino_product.jpg",
    },
    {
      name: "Flat White",
      url: "https://www.costa.co.uk/static/pim/c/a/3/5/ca35deeee81ee981ca0696e180f2283e8e2440d8_flat_white_thumb.jpg",
      id: 6,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "A delicious combination of Espresso and velvety milk, signed off with a perfect florette.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/d/b/f/1/dbf13f7b73835a4e336c5a46568e3ea026b34bf9_flat_white_product.jpg",
    },
    {
      name: "Flat Black",
      url: "https://www.costa.co.uk/static/pim/a/f/4/e/af4ec8616895564b35daae67aa55d00b731f663a_flat_black_thumb.jpg",
      id: 7,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "A short but intense espresso extracted over water, providing a smooth silky bold coffee.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/d/5/4/5/d545c9aff177c6b646e43ff907635edaffd4ed26_flat_black_product.jpg",
    },
    {
      name: "Americano",
      url: "https://www.costa.co.uk/static/pim/5/5/6/d/556db22718edf9715bff69175131e3461fe2a2dc_americano_thumb.jpg",
      id: 8,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our signature Espresso softened with hot water. Drink it straight up or add a splash of milk.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/1/e/4/8/1e4872c62df29bd5e961b1e54cb5d037377c5f78_americano_product.jpg",
    },
    {
      name: "Mocha",
      url: "https://www.costa.co.uk/static/pim/1/0/d/c/10dc753ebf1c473adc9570531119207f1bca4cec_flat_mocha_thumb.jpg",
      id: 9,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Expertly steamed chocolate milk blended with espresso for a caffeinated chocolate treat.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/a/1/7/d/a17d8ed38eb14304f32a641409eddbbfec7ca15c_flat_mocha_product.jpg",
    },
    {
      name: "Cortado",
      url: "https://www.costa.co.uk/static/pim/f/3/f/7/f3f7a6ec94bf5cf0e33abe514868baf9f8b5e416_cortado_thumb.jpg",
      id: 10,
      drinkType: "coffee, all",
      categoryName: "Coffee",
      description:
        "Our signature Espresso and textured milk, signed off with a little heart.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/1/4/0/6/1406b286269faf17b515c7a5cfa51e9b1b1147ce_cortado_product.jpg",
    },
    {
      name: "Aero® Mint Hot Chocolate",
      url: "https://www.costa.co.uk/static/pim/6/2/0/3/6203d3b98ace10b0befee89533b91d8a5c17d024_Mint_Aero_Hot_Chocolate_Mint_Bubble_Thumb.jpg",
      id: 11,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description:
        "Hot chocolate with the bubbly taste of Aero® mint, topped with a light dairy swirl, Aero® milk chocolate chunks and a mint Aero® bubble.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/d/d/5/6/dd56f8f7d59b0398496ed8bead948d4cdf5f34eb_Mint_Aero_Hot_Chocolate_Mint_Bubble.jpg",
    },
    {
      name: "Aero® Caramel Hot Chocolate",
      url: "https://www.costa.co.uk/static/pim/3/2/3/6/32369d819802e578b08c1ba17249b88a40b8e81f_Mint_Aero_Hot_Chocolate_Caramel_Bubble.jpg",
      id: 12,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description:
        "Hot chocolate with the taste of new Aero® chocolate caramel bar, topped with light dairy swirl, Aero® chocolate chunks and an Aero® bubble.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/c/9/b/2/c9b297e5beceef04a767eb80902c61b2c9135d93_Mint_Aero_Hot_Chocolate_Caramel_Bubble__1_.jpg",
    },
    {
      name: "White Hot Chocolate",
      url: "https://www.costa.co.uk/static/pim/e/1/c/2/e1c2a00a14355f78e5cc58a497387d73f6336d57_white_hot_chocolate_thumb.jpg",
      id: 13,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description: "Rich, creamy and silky smooth.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/6/1/6/f/616f68bbe07795859a0d927bc1599d36bf296f05_white_hot_chocolate_product.jpg",
    },
    {
      name: "Ruby Hot Chocolate with Light Dairy Swirl",
      url: "https://www.costa.co.uk/static/pim/d/0/c/1/d0c103e009dd5d5478be5b47d6f6b810915ca4ee_Ruby_Hot_Chocolate_Thumb__1_.jpg",
      id: 14,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description:
        "A deliciously fruity, rose-coloured hot chocolate made with Ruby cocoa beans, topped with light dairy swirl and red shimmer chocolate curls.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/a/7/b/e/a7be7a1577d332e59711375d9a946b41e893ba92_Ruby_Hot_Chocolate__1_.jpg",
    },
    {
      name: "Hot Chocolate",
      url: "https://www.costa.co.uk/static/pim/c/5/3/f/c53fa0cb42a0d21e48ec4299db78e64a46d64955_Hot_Chocolate_Thumb.jpg",
      id: 15,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description:
        "We only use the best cocoa for this indulgent drink. Perfect for days when you need a hug in a cup.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/7/f/a/2/7fa2ed7f148cc0b65288707e18589cfaae4adc77_Hot_Chocolate.jpg",
    },
    {
      name: "Chai Latte",
      url: "https://www.costa.co.uk/static/pim/3/3/e/4/33e48a853aac22cf771dddcd7a3fdad32babea20_chai_latte_thumb.jpg",
      id: 16,
      drinkType: "hot chocolate, all",
      categoryName: "Hot Chocolate",
      description: "A warm, comforting milk tea with aromatic spices.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/5/f/e/e/5fee1f47f1513237dd6113ce97217a1d9013e5d3_chai_latte_product.jpg",
    },
    {
      name: "Salted Caramel & Cream Frostino",
      url: "https://www.costa.co.uk/static/pim/8/0/3/b/803b0a715b62363f2ba8e486f7e7984c24427c7e_salted_caramel_crunch_frostino_with_cream_thumb.jpg",
      id: 17,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "A sweet, fluffy drink with rich salted caramel, finished with whipped cream and a crunchy topping. Can be made with or without coffee.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/2/8/7/5/2875deb8be90461d55a2256cf74cab8a894ac89b_salted_caramel_crunch_frostino_with_cream_product.jpg",
    },
    {
      name: "Ruby Chocolate Frostino & Light Dairy Swirl",
      url: "https://www.costa.co.uk/static/pim/4/c/3/8/4c382c8a441f79baa183c05c1cdb2b56192f0d0c_Ruby_Frostino_with_Cream_Thumb__1_.jpg",
      id: 18,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "The pink and delicately fruity chocolate drink as a cool, creamy frostino, topped with a light dairy swirl and shimmer red chocolate curls.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/4/7/f/5/47f5730345032869859e9c18f98f294b16e93072_Ruby_Frostino_with_Cream__1_.jpg",
    },
    {
      name: "Belgian Chocolate & Cream Frostino",
      url: "https://www.costa.co.uk/static/pim/2/4/a/7/24a731df2acaaec18e5c533d456ddb4c48989711_Belgian_Chocolate_Frostino_With_Cream_Thumb__1_.jpg",
      id: 19,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "Rich and creamy blended drink made with Belgian chocolate sauce, topped with cream and a sprinkling of chocolate powder. Can be made with or without coffee.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/1/b/7/5/1b759b1fe215061ca3ca9cd96ad3cee8b57fbde5_Belgian_Chocolate_Frostino.jpg",
    },

    {
      name: "Mint Choc Chip Frostino & Cream",
      url: "https://www.costa.co.uk/static/pim/6/a/6/6/6a66b76e983028e48fa7364d93cdbf7105387f1c_mint_choc_chip_frostino_with_cream_thumb.jpg",
      id: 20,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "A refreshing indulgent treat, combining mint and chocolate in a Frostino, topped with cream and finished with a drizzle of chocolate sauce.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/5/1/c/3/51c38e301bc10bf5d5376abc6ab1616a5d856448_mint_choc_chip_frostino_with_cream_product.jpg",
    },
    {
      name: "Strawberry & Cream Frostino",
      url: "https://www.costa.co.uk/static/pim/d/c/7/2/dc728e18733b915c2601e85faeba895a95432163_Strawberries___Cream_Frostino_With_Cream_Thumb.jpg",
      id: 21,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "An indulgent blended ice drink, made from strawberry sauce, milk and ice and finished with fresh cream.",
      largeImgUrl:
        "       https://www.costa.co.uk/static/pim/8/a/6/2/8a6238dcf2036bceb53e89a270fa517d737e0803_Strawberries___Cream_Frostino_With_Cream.jpg",
    },
    {
      name: "Coffee Frostino",
      url: "https://www.costa.co.uk/static/pim/1/8/a/8/18a83bb50e8105b4f640911911f8648f1d0b31f9_coffee_frostino_thumb.jpg",
      id: 22,
      drinkType: "frostino, all",
      categoryName: "Frostino",
      description:
        "Get your coffee fix in the form of a creamy, milky, ice cold Frostino.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/0/c/1/5/0c151027262ab6dca0ddd2a4dd587cb7807923a4_coffee_frostino_product.jpg",
    },
    {
      name: "Green Tea",
      url: "https://www.costa.co.uk/static/pim/f/5/c/6/f5c6e7d7a66741eea981699533ecbee36ebf37f8_Fuze_Tea_Green_Tea_Thumb__2_.jpg",
      id: 23,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "A wonderfully mellow steam dried green tea from Eastern China. So delicious and easy to drink.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/7/5/7/8/75788f8f8b718621392a7183e08883e6094662a4_Fuze_Tea_Green_Tea.jpg",
    },
    {
      name: "Berry Infusion",
      url: "https://www.costa.co.uk/static/pim/1/a/0/9/1a095cbbcc88aee525ed98c51b9ae6c94faa1641_Fuze_Tea_Fruit_Infusion_Thumb__3_.jpg",
      id: 24,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "Bursting with flavour, this berrylicious tea tastes great hot or cold.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/5/5/0/3/55036fd03c52114f2a95c223c4395cec8c50a1b3_Fuze_Tea_Fruit_Infusion__1_.jpg",
    },

    {
      name: "English Breakfast Tea",
      url: "https://www.costa.co.uk/static/pim/0/8/7/9/0879c8b825788f9d66736381c0346c3eeea75520_english_breakfast_tea_thumb__1_.jpg",
      id: 25,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "A bold and full-bodied tea, full of flavour and perfect for brightening up your day.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/8/2/f/6/82f621e2ad2e1e94b84eb12fe1abfdbca101e8e9_english_breakfast_tea_product__1_.jpg",
    },

    {
      name: "Jasmine Tea",
      url: "https://www.costa.co.uk/static/pim/d/3/2/d/d32d8984ce06ddd028791bf558256b9cc53ba6f0_Pure_Green_Tea_Thumb__2_.jpg",
      id: 26,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "AA wonderfully mellow steam dried green tea from Eastern China. So delicious and easy to drink.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/8/6/0/b/860b20766e82098256fce7363f8d2f881b14563a_Pure_Green_Tea__2_.jpg",
    },
    {
      name: "Mint Infusion",
      url: "https://www.costa.co.uk/static/pim/f/5/2/9/f52941c5c570d92e10f42dc5d64df4417c5b78b7_Fuze_Tea_Mint_Infusion_Thumb__1_.jpg",
      id: 27,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "Everything you expect from the ultimate mint experience - glorious peppermint, rounded with vibrant bursts of sweet spearmint.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/6/f/5/7/6f5792a20cf046dc6324cdba3cb87c8c69ecd38d_Fuze_Tea_Mint_Infusion.jpg",
    },
    {
      name: "Earl Grey Tea",
      url: "https://www.costa.co.uk/static/pim/5/3/d/3/53d335c9cf644463d7dcd1d71c773f7646fe6d19_Earl_Grey_Thumb__1_.jpg",
      id: 28,
      drinkType: "tea, all",
      categoryName: "Tea",
      description:
        "A Chinese black tea blended with the wonderfully citrusy flavour of bergamot.",
      largeImgUrl:
        "https://www.costa.co.uk/static/pim/6/e/9/5/6e950fdc541aa5e66c403466fb9485f102027250_Earl_Grey__1_.jpg",
    },
  ]);
}
