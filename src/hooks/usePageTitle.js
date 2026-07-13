import { useEffect } from 'react'

function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | Dashmobiles Private Limited` : 'Dashmobiles Private Limited'
  }, [title])
}

export default usePageTitle
