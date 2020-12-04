import React from "react";
import { render , screen , fireEvent, getByText} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";
import App from "../App";
import { act  } from "react-dom/test-utils";

// Write up the two tests here and make sure they are testing what the title shows


test("form shows success message on submit with form details", async() => {});
//render checkoutForm
act(() => {
    render(<CheckoutForm />);
});
//click button
const button = screen.getByRole("button");
fireEvent.click(button);

//select data-testid="successMessage"
const successMessage = screen.findByTestId("successMessage");
console.log(successMessage);
//check if it exists

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = getByText("Checkout Form");
    expect(header).toBeInTheDocument();

    });