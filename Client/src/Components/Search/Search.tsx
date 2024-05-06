import React, { ChangeEvent, FormEvent, SyntheticEvent } from 'react'

interface Props {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearchSubmit: (e: SyntheticEvent) => void;
}

const Search:React.FC<Props> = ( {onSearchSubmit, search, handleSearchChange} : Props): JSX.Element => {
  return (
    // <section className="relative bg-gray-100">
    //   <div className="max-w-4xl mx-auto p-6 space-y-6">
    //     <form
    //       className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
    //       onSubmit={onSearchSubmit}
    //     >
    //       <input
    //         className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
    //         id="search-input"
    //         placeholder="Search companies"
    //         value={search}
    //         onChange={handleSearchChange}
    //       ></input>

    //       <button className="btn-submit" type='submit' >submit</button>
    //     </form>
    //   </div>
    // </section>
    <form onSubmit={onSearchSubmit} >
      <input value={search} onChange={handleSearchChange} />
      <button type="submit">Seek companies</button>

    </form>
  )
}

export default Search
