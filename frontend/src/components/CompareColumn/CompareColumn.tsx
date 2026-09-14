import SearchBar from '../SearchBar/SearchBar'
import Loading from '../Loading/Loading'
import CityCompareList from '../CityCompareList/CityCompareList'
import CompareCity from '../CompareCity/CompareCity'
import type { FetchResult } from '../../hooks/useFetch'
import type { City } from '../../types/city.types'
import './CompareColumn.css'

type CompareColumnProps = {
  citiesResult: FetchResult<City[]>
  city: City | null
  onSearch: (value: string) => void
  onSelect: (city: City) => void
}

export default function CompareColumn(props: CompareColumnProps) {
  return (
    <div className="compare-column">
      <SearchBar onSearch={props.onSearch} />

      {props.citiesResult.loading && <Loading text="מחפש ערים..." />}
      {props.citiesResult.error && (
        <p className="error-message">{props.citiesResult.error}</p>
      )}
      {props.citiesResult.data && (
        <CityCompareList cities={props.citiesResult.data} onSelect={props.onSelect} />
      )}

      {props.city && <CompareCity city={props.city} />}
    </div>
  )
}
