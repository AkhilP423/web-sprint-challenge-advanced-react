import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";


test ("renders without errors", () => {
    render(<CheckoutForm/>);

//Arrange 
    const checkoutFormHeader = screen.getByText(/Checkout Form/i);
    const firstName = screen.getByText(/First Name/i);
    const lastName = screen.getByText(/Last Name/i);
    const address = screen.getByText(/Address/i);
    const city = screen.getByText(/City/i);
    const state = screen.getByText(/State/i);
    const zip = screen.getByText(/Zip/i);
    const button = screen.getByRole("button", {name: /checkout/i});

//Act
    expect(CheckoutForm).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
    expect(button).toBeInTheDocument();

//Assert
    expect(checkoutFormHeader).toBeVisible();
    expect(firstName).toBeVisible();
    expect(lastName).toBeVisible();
    expect(address).toBeVisible();
    expect(city).toBeVisible();
    expect(state).toBeVisible();
    expect(zip).toBeVisible();
    expect(button).toBeVisible();
    });



test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

//Arrange
    const checkoutFormHeader = screen.getByText(/Checkout Form/i);
    const firstName = screen.getByText(/First Name/i);
    const lastName = screen.getByText(/Last Name/i);
    const address = screen.getByText(/Address/i);
    const city = screen.getByText(/City/i);
    const state = screen.getByText(/State/i);
    const zip = screen.getByText(/Zip/i);
    const button = screen.getByRole("button", {name: /checkout/i});

//Act
    userEvent.type(firstName, "Mike");
    userEvent.type(lastName, "Jones");
    userEvent.type(address, "132 Dallas Drive");
    userEvent.type(city, "Huston");
    userEvent.type(state, "Texas");
    userEvent.type(zip, "92813");
    userEvent.click(button);

//Assert
    const orderProcessedMessage = screen.getByText(/green friends/i);
    const customerDetails = screen.getByText(/Mike/i);

    expect(orderProcessedMessage).toBeTruthy();
    expect(customerDetails).toBeTruthy();

    expect(orderProcessedMessage).toBeVisible();
    expect(customerDetails).toBeVisible();
});