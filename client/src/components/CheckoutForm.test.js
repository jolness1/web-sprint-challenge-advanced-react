import React from "react";
import { render , screen} from "@testing-library/react";
import userEvent  from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", async () => {
// Arrange
    render(<CheckoutForm />);
// Act
    //select form fields
        const firstName = screen.getByLabelText(/first name/i)
        const lastName = screen.getByLabelText(/last name/i);
        const address = screen.getByLabelText(/address/i);
        const city = screen.getByLabelText(/city/i);
        const state = screen.getByLabelText(/state/i);
        const zip = screen.getByLabelText(/zip/i);
    //test right things are selected
        // console.log(firstName);
        // console.log(lastName);
        // console.log(address);
        // console.log(city);
        // console.log(state);
        // console.log(zip);
    // Simulate Typing 
        userEvent.type(firstName, "Jacob");
        userEvent.type(lastName, "Olness");
        userEvent.type(address, "3123 Country Club Circle");
        userEvent.type(city, "Billings");
        userEvent.type(state, "Montana");
        userEvent.type(zip, "59102");
    //Submit 
        const button = screen.getByRole('button');
        userEvent.click(button);
// Assert
    const successMessage = await screen.getByTestId(/successMessage/i);
    expect(successMessage).toBeInTheDocument();


});