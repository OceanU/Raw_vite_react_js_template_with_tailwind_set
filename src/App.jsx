function App() {


  //function to see viewport width according to tailwind breakpoints - TO BE DELETED BEFORE BUILD !!!!!!
  function updateWindowSize() {
    const windowWidth = window.innerWidth;
    // const windowHeight = window.innerHeight;
    console.log(`Window Width: ${windowWidth}px`);

    if ((windowWidth >= 640) && (windowWidth < 768)) {
        console.log('sm > 640px <768px')
    } else if ((windowWidth >= 768) && (windowWidth < 1024)) {
        console.log('md > 768px < 1024px ')
    } else if ((windowWidth >= 1024) && (windowWidth < 1280)) {
        console.log('lg - >1024px <1280px ')
    } else if ((windowWidth >= 1280) && (windowWidth < 1536)) {
        console.log('xl - >1280px <1536px ')
    } else if ((windowWidth >= 1536) && (windowWidth < 1920)) {
        console.log('2xl - >1536px  <1920px')
    } else if ((windowWidth >= 1920) && (windowWidth < 2560)) {
        console.log('3xl - >1920px <2560px ')
    } else if (windowWidth >= 2560) {
        console.log('4xl - >2560px ')
    }

}

// Initial call to set the initial window size
updateWindowSize();

// Event listener for window resize
window.addEventListener('resize', updateWindowSize);

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world! This template is already set to work with TAILWIND
    </h1>
    </>
  )
}

export default App
