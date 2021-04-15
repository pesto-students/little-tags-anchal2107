import * as actions from "../../constant/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "Product1",
      image: "https://via.placeholder.com/600/92c952",
      price: 200,
      quantity: 1,
      size: "S",
      description:
        "This1 board is set to public. You can change its visibility at any time. This board is set to public. You can change its visibility at any time",
    },
    {
      id: 2,
      title: "Product2",
      image: "https://via.placeholder.com/600/92c952",
      price: 300,
      quantity: 3,
      size: "S",
      description:
        "This2 board is set to public. You can change its visibility at any time. This board is set to public. You can change its visibility at any time",
    },
    {
      id: 3,
      title: "Product1",
      image: "https://via.placeholder.com/600/f66b97",
      price: 400,
      quantity: 1,
      size: "S",
      description:
        "This3 board is set to public. You can change its visibility at any time. This board is set to public. You can change its visibility at any time",
    },
    {
      id: 4,
      title: "Product1",
      image: "https://via.placeholder.com/600/24f355",
      price: 500,
      quantity: 6,
      size: "S",
      description:
        "This4 board is set to public. You can change its visibility at any time. This board is set to public. You can change its visibility at any time",
    },
    {
      id: 5,
      title: "Product1",
      image: "https://via.placeholder.com/600/771796",
      price: 600,
      quantity: 4,
      size: "S",
      description:
        "This5 board is set to public. You can change its visibility at any time. This board is set to public. You can change its visibility at any time",
    },
  ],
  product: {},
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PRODUCT:
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
