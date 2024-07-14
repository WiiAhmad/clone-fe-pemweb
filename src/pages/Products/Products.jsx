import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [readStatus, setReadStatus] = useState("all");
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      cover: "/placeholder.svg",
      category: "fiction",
      popularity: 4.5,
      releaseDate: "1925-04-10",
      readStatus: "read",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        'To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the town of Maycomb, Alabama, during the Great Depression, the story is told by the six-year-old Jean Louise "Scout" Finch.',
      cover: "/placeholder.svg",
      category: "fiction",
      popularity: 4.8,
      releaseDate: "1960-07-11",
      readStatus: "want to read",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      description:
        "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. The story follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
      cover: "/placeholder.svg",
      category: "fiction",
      popularity: 4.2,
      releaseDate: "1988-01-01",
      readStatus: "read",
    },
    {
      id: 4,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      description:
        "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan, the son of his father's servant.",
      cover: "/placeholder.svg",
      category: "fiction",
      popularity: 4.6,
      releaseDate: "2003-05-29",
      readStatus: "want to read",
    },
    {
      id: 5,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      description:
        "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the post-apocalyptic nation of Panem, where the countries of North America once existed.",
      cover: "/placeholder.svg",
      category: "science-fiction",
      popularity: 4.7,
      releaseDate: "2008-09-14",
      readStatus: "read",
    },
    {
      id: 6,
      title: "The Martian",
      author: "Andy Weir",
      description:
        "The Martian is a 2011 science fiction novel written by Andy Weir. It follows an American astronaut, Mark Watney, as he becomes stranded alone on Mars in 2035 and must improvise in order to survive and find a way to signal to Earth that he is alive.",
      cover: "/placeholder.svg",
      category: "science-fiction",
      popularity: 4.5,
      releaseDate: "2011-02-11",
      readStatus: "want to read",
    },
    {
      id: 7,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      description:
        "The Handmaid's Tale is a dystopian novel by Canadian author Margaret Atwood, published in 1985. It is set in a near-future New England, in a totalitarian state resembling a theonomy, which has overthrown the United States government.",
      cover: "/placeholder.svg",
      category: "science-fiction",
      popularity: 4.3,
      releaseDate: "1985-08-29",
      readStatus: "read",
    },
    {
      id: 8,
      title: "The Book Thief",
      author: "Markus Zusak",
      description:
        "The Book Thief is a historical novel by Australian author Markus Zusak, first published in 2005. Set in Nazi Germany, the story is narrated by Death and follows its main character, Liesel Meminger, from the time she is nine to the age of fourteen.",
      cover: "/placeholder.svg",
      category: "historical-fiction",
      popularity: 4.6,
      releaseDate: "2005-09-14",
      readStatus: "want to read",
    },
  ];
  const filteredBooks = useMemo(() => {
    let filtered = books;
    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== "all") {
      filtered = filtered.filter((book) => book.category === selectedCategory);
    }
    if (readStatus !== "all") {
      filtered = filtered.filter((book) => book.readStatus === readStatus);
    }
    if (sortBy === "popularity") {
      filtered = filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "release-date") {
      filtered = filtered.sort(
        (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
      );
    }
    return filtered;
  }, [searchTerm, selectedCategory, sortBy, readStatus]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const handleSortChange = (sort) => {
    setSortBy(sort);
  };
  const handleReadStatusChange = (status) => {
    setReadStatus(status);
  };
  const handleMarkAsRead = (book) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, readStatus: "read" } : b
    );
  };
  const handleMarkAsWantToRead = (book) => {
    const updatedBooks = books.map((b) =>
      b.id === book.id ? { ...b, readStatus: "want to read" } : b
    );
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Virtual Library</h1>
        <div className="flex items-center mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-first lg:order-1 md:order-1 mb-4 mr-4">
              <Input
                type="text"
                placeholder="Search books..."
                value={searchTerm}
                onChange={handleSearch}
                className="flex-1"
              />
            </div>
            <div className="md:order-2 order-last lg:order-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-4">
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter by category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "all"}
                    onCheckedChange={() => handleCategoryChange("all")}
                  >
                    All
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "fiction"}
                    onCheckedChange={() => handleCategoryChange("fiction")}
                  >
                    Fiction
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "science-fiction"}
                    onCheckedChange={() =>
                      handleCategoryChange("science-fiction")
                    }
                  >
                    Science Fiction
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategory === "historical-fiction"}
                    onCheckedChange={() =>
                      handleCategoryChange("historical-fiction")
                    }
                  >
                    Historical Fiction
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-4">
                    <ListOrderedIcon className="w-4 h-4 mr-2" />
                    Sort by
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem
                    value="popularity"
                    checked={sortBy === "popularity"}
                    onCheckedChange={handleSortChange}
                  >
                    Popularity
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="release-date"
                    checked={sortBy === "release-date"}
                    onCheckedChange={handleSortChange}
                  >
                    Release Date
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="mr-4">
                    <BookIcon className="w-4 h-4 mr-2" />
                    Read status
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Read status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioItem
                    value="all"
                    checked={readStatus === "all"}
                    onCheckedChange={handleReadStatusChange}
                  >
                    All
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="read"
                    checked={readStatus === "read"}
                    onCheckedChange={handleReadStatusChange}
                  >
                    Read
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value="want to read"
                    checked={readStatus === "want to read"}
                    onCheckedChange={handleReadStatusChange}
                  >
                    Want to Read
                  </DropdownMenuRadioItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.slice(0, 4).map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={book.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-gray-500 mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <span className="text-sm font-medium">
                          {book.popularity.toFixed(1)}
                        </span>
                      </div>
                      {book.readStatus === "read" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsRead(book)}
                        >
                          Mark as Read
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsWantToRead(book)}
                        >
                          Want to Read
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">All Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link href="#" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    alt={book.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600 mb-2">{book.author}</p>
                    <p className="text-gray-500 mb-4 line-clamp-3">
                      {book.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <StarIcon className="w-4 h-4 fill-primary" />
                        <span className="text-sm font-medium">
                          {book.popularity.toFixed(1)}
                        </span>
                      </div>
                      {book.readStatus === "read" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsRead(book)}
                        >
                          Mark as Read
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMarkAsWantToRead(book)}
                        >
                          Want to Read
                        </Button>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
