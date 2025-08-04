import {cryptoData, cryptoAssets} from './data'
export function fakeFetchCripto(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 2)
    })
}
export function fetchAssets(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 2)
    })
}