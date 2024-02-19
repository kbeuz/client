import { Route, Routes } from "react-router-dom";
import { Footer, NavbarDesktop, NavbarMobile, SubNavbar } from "./components";
import {
  Category,
  Home,
  InternalServerError,
  Latest,
  Post,
  NotFound,
  Search,
} from "./pages";
import SearchModal from "./components/ui/modal";
import { useSearchModal } from "./hooks";
import { SearchInput } from "./components/ui";

function App() {
  const searchModal = useSearchModal();

  return (
    <div className="flex flex-col min-h-screen text-black dark:text-white">
      {/* Search modal */}
      <SearchModal isOpen={searchModal.isOpen} onClose={searchModal.onClose}>
        <div className="flex justify-center items-center">
          <div className="w-[50%] max-lg:w-[90%]">
            <SearchInput />
          </div>
        </div>
      </SearchModal>

      {/* Navbar */}
      <div className="dark:bg-[#10205B] py-4">
        <div className="max-lg:hidden w-[80%] mx-auto container">
          <NavbarDesktop />
        </div>

        <div className="lg:hidden">
          <NavbarMobile />
        </div>
      </div>

      {/* Sub-navbar */}
      <div className="bg-primary bg-opacity-[5%] dark:bg-[#1d2648] py-3 max-lg:hidden">
        <div className="w-[80%] mx-auto container">
          <SubNavbar />
        </div>
      </div>

      {/* Main  */}
      <div className="flex-1 justify-between w-[80%] mx-auto max-lg:w-[90%] container pb-10">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="/search" element={<Search />} />
          <Route path="/latest" element={<Latest />} />

          {/* 500 and 404 pages */}
          <Route path="/500" element={<InternalServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <div className="bg-primary py-3">
        <div className="w-[70%] mx-auto container max-md:w-[90%]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
