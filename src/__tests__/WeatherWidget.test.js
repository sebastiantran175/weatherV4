import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'
import WeatherWidget from "../components/WeatherWidget";
import WeatherWidgetDemoPage from "../WeatherWidgetDemoPage";


// Mock Window Element
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        // addListener: jest.fn(), // Deprecated
        // removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});


// Test that the page can be initialised upon render
test('Basic Initial Render', () => {
    render(<WeatherWidgetDemoPage />);
    const linkElement = screen.getByText(/search/i);
    expect(linkElement).toBeInTheDocument();
});