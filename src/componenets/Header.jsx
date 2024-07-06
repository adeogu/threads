// Importing necessary components and hooks from the Chakra UI library
import { Flex, Image, useColorMode } from '@chakra-ui/react';

// Defining the Header functional component
const Header = () => {

    // Destructuring colorMode and toggleColorMode from useColorMode hook
    const { colorMode, toggleColorMode } = useColorMode();

    // Returning JSX to render the header
    return (
        // Flex container to center the content with top and bottom margins
        <Flex justifyContent={"center"} mt={6} mb={12}>
            {/* Image component to display the logo */}
            <Image
                cursor={"pointer"} // Changing cursor to pointer on hover
                alt='logo' // Alternative text for the image
                w={6} // Setting the width of the image
                src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"} // Dynamically setting the image source based on color mode
                onClick={toggleColorMode} // Toggle color mode on image click
            />
        </Flex>
    );
};

// Making the Header component available for use in other files
export default Header;


//what does it mean to render ?
//A: "render" refers to the process of generating the user interface (UI) for display on the screen.
// When you render a component in a web application, you are creating
// the HTML and applying the necessary CSS and JavaScript to display the component
// as part of the web page.