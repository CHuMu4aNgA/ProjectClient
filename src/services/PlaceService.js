import $api from '../api'


export class PlaceService{
    static async getPlaces(){
        return $api.get('/places')
    }

    static async getPlace(placeId){
        return $api.get(`/places/${placeId}`)
    }

    static async createPlace(title, text, gallery, thumbnail){
        return $api.post('/places', {
            title, 
            text,
            gallery,
            thumbnail
        })
    }

    static async updatePlace(placeId){
        return $api.patch(`/places/${placeId}`)
    }

    static async deletePlace(placeId){
        return $api.delete(`/places/${placeId}`)
    }
}