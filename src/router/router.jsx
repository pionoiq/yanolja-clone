import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Platform from '../pages/WhatWeDo/Platform';
import Hospitality from '../pages/WhatWeDo/Hospitality';
import Partnership from '../pages/WhatWeDo/Partnership';
import Space from '../pages/WhatWeDo/Space';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo">
          <Route path="platform" element={<Platform />} />
          <Route path="hospitality" element={<Hospitality />} />
          <Route path="space" element={<Space />} />
          <Route path="partnership" element={<Partnership />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
