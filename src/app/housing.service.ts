import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'ツッキーさん',
      subject: '人間関係の悩み',
      text:'人と関係を築けず悩んでます。',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'レイさん',
      subject: '恋愛の悩み',
      text:'好きな人と関係を築けず悩んでます。',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'マイさん',
      subject:'学校の悩み',
      text:'学校が退屈で楽しくありません。',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'ちゅぴさん',
      subject: '受験の悩み',
      text: '受験全落ちしました。お母さんにどう伝えたらいいかわかりません。',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 4,
      name: 'サムさん',
      subject: '金の悩み',
      text: '収入をあげることができずに悩んでいます。',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'ザックさん',
      subject: '投資の悩み',
      text: '積み立てをしてますが、今下降気味で悩んでいます。',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'ゆいさん',
      subject: '結婚生活の悩み',
      text: '旦那が家事に非協力的でストレスばかりです。',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'るえうさん',
      subject: '人生の悩み',
      text: 'かなり暇ですが。家から出る気もないですが何をすればいいですか？',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'ムックさん',
      subject: '滑舌の悩み',
      text: '滑舌が悪いです。さ行が苦手です。どうすればいいか教えてください。',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: '非公開さん',
      subject: '大学生の私服について',
      text: '私は服がパーカーとジャージの2着しかなくて、大学生は服を何着くらい持つべきですか？',
      availableUnits: 6,
      wifi: true,
      laundry: true
    },

  ];
  
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation |
  undefined {
    return this.housingLocationList.find
      (housingLocation => housingLocation.id === id);
      
  }
  submitApplication(Name: string, subtitle: string, text: string) {
    console.log(`Homes application received: Name:${Name}, subtitle: ${subtitle}, text: ${text}`)
  }
}
