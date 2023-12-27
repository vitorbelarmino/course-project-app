type Options = {
  id: string
  name: string
}
type SelectProps = {
  options: Options[] | undefined
  perfil?: boolean
  handleSelect: (id: string, name: string) => void
  children: React.ReactNode
}
export function Dropdown ({
  options,
  perfil,
  handleSelect,
  children
}: SelectProps) {
  return (
    <div className="dropdown">
      {children}
      <div className={`dropdown-menu absolute pt-5 hidden ${perfil && 'right-3 pt-3'}`}>
        <div className="border border-gray-300 p-1 gap-6 bg-white">
          {
            options
              ? <>
                {options.map((option, index) => (
                  <div key={index} onClick={() => handleSelect(option.id, option.name)} className="p-1 cursor-pointer">
                    <p className="hover:text-blue-600">{option.name}</p>
                  </div>
                ))}
              </>
              : <p className='p-1'>Carregando...</p>
          }
        </div>
      </div>
    </div>
  )
}
