import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { fontType, colors } from './src/theme';
import { Global, SearchNormal1, ArrowRight2, More, Star1 } from 'iconsax-react-native';
import { GadisJemari, GigitanPertama } from './src/assets/image';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontFamily: fontType['Ct-Bold'], color: colors.black(), fontSize: 20, paddingLeft: 10 }}>Komik</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
          <Global color={colors.black()} variant="Linear" size={24} style={{ marginRight: 15 }} />
          <SearchNormal1 color={colors.black()} variant="Linear" size={24} />
        </View>
      </View>
      <ScrollView>
        <Recomendation />
        <MaybeLike />
        <Popular />
        <EditorChoice />
      </ScrollView>
    </View>
  );
}

const Recomendation = () => {
  return (
    <View style={styles.listCategory}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.subTitle}>Direkomendasikan untuk anda</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, paddingBottom: 10 }}>
          <Text style={{ fontFamily: fontType['Ct-Reguler'], color: colors.grey(0.5), fontSize: 15, paddingLeft: 10 }}>Lagi</Text>
          <ArrowRight2 color={colors.grey(0.5)} variant="Linear" size={20} style={{ marginRight: 5, top: 2 }} />
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{ ...category.item, marginLeft: 10 }}>
          <Text style={category.title}>
            Romantis
          </Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Fantasi</Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Komedi</Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Menegangkan</Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Historis</Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Fantasi Timur</Text>
        </View>
        <View style={category.item}>
          <Text style={category.title}>Aksi</Text>
        </View>
      </ScrollView>
      <View style={category.cardContainer}>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
      </View>
    </View>
  )
}

const MaybeLike = () => {
  return (
    <View style={maybelike.container}>
      <Text style={styles.subTitle}>Kamu Mungkin Suka</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={maybelike.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={maybelike.favorite}>
            <Star1 color={colors.white()} variant="Linear" size={15} />
            <Text style={maybelike.textFavorite}>Favorit</Text>
          </View>
        </View>
        <View style={maybelike.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={maybelike.favorite}>
            <Star1 color={colors.white()} variant="Linear" size={15} />
            <Text style={maybelike.textFavorite}>Favorit</Text>
          </View>
        </View>
        <View style={maybelike.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={maybelike.favorite}>
            <Star1 color={colors.white()} variant="Linear" size={15} />
            <Text style={maybelike.textFavorite}>Favorit</Text>
          </View>
        </View>
        <View style={maybelike.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={maybelike.favorite}>
            <Star1 color={colors.white()} variant="Linear" size={15} />
            <Text style={maybelike.textFavorite}>Favorit</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const EditorChoice = () => {
  return (
    <View style={styles.listCategory}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.subTitle}>Pilihan Editor</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, paddingBottom: 10 }}>
          <Text style={{ fontFamily: fontType['Ct-Reguler'], color: colors.grey(0.5), fontSize: 15, paddingLeft: 10 }}>Lagi</Text>
          <ArrowRight2 color={colors.grey(0.5)} variant="Linear" size={20} style={{ marginRight: 5, top: 2 }} />
        </View>
      </View>
      <View style={{ ...category.cardContainer, top: -8 }}>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={category.card}>
          <Image
            source={GadisJemari}
            style={category.image}
          />
          <Text style={category.judul}>Gadis Jemari</Text>
          <View style={category.genreMore}>
            <Text style={category.genre}>Komedi</Text>
            <More style={{ ...category.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
      </View>
    </View>
  )
}

const Popular = () => {
  return (
    <View style={popular.container}>
      <Text style={styles.subTitle}>Populer</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <View style={popular.card}>
          <Image
            source={GigitanPertama}
            style={popular.image}
          />
          <Text style={popular.judul} >Gigitan Pertama Raja</Text>
          <View style={popular.genreMore}>
            <Text style={popular.genre}>38 Episode</Text>
            <More style={{ ...popular.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={popular.card}>
          <Image
            source={GigitanPertama}
            style={popular.image}
          />
          <Text style={popular.judul}>Gigitan Pertama Raja</Text>
          <View style={popular.genreMore}>
            <Text style={popular.genre}>38 Episode</Text>
            <More style={{ ...popular.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={popular.card}>
          <Image
            source={GigitanPertama}
            style={popular.image}
          />
          <Text style={popular.judul}>Gigitan Pertama Raja</Text>
          <View style={popular.genreMore}>
            <Text style={popular.genre}>38 Episode</Text>
            <More style={{ ...popular.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
        <View style={popular.card}>
          <Image
            source={GigitanPertama}
            style={popular.image}
          />
          <Text style={popular.judul}>Gigitan Pertama Raja</Text>
          <View style={popular.genreMore}>
            <Text style={popular.genre}>38 Episode</Text>
            <More style={{ ...popular.moreIcon, transform: [{ rotate: '90deg' }] }} variant='Linear' size={16} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Change to space-between
    alignItems: 'center',
    height: 55,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    paddingLeft: 15,
    fontSize: 25,
    fontFamily: fontType['Ct-Bold'],
    color: colors.black(),
  },
  genre: {
    fontSize: 25,
    fontFamily: fontType['Ct-SemiBold'],
    color: colors.black(),
    paddingHorizontal: 20,
  },
  listCategory: {
    paddingVertical: 10,
  },
  subTitle: {
    fontFamily: fontType['Ct-Bold'],
    color: colors.black(),
    fontSize: 22,
    paddingLeft: 10,
    paddingBottom: 10
  },
})

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 10,
    lineHeight: 10,
    color: colors.blue(),
  },
  cardContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 4,
    justifyContent: 'space-around',
    width: 'auto',
    height: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    marginVertical: 5,
    width: 110,
    height: 200,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey(0.2),
  },
  image: {
    padding: 5,
    width: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  judul: {
    top: 5,
    left: 5,
    color: colors.black(),
    fontSize: 15,
    fontFamily: fontType['Ct-Bold'],
  },
  genre: {
    paddingTop: 25,
    left: 5,
    color: colors.grey(0.8),
    fontSize: 10,
    fontFamily: fontType['Ct-Reguler'],
  },
  genreMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreIcon: {
    top: 10,
    color: colors.grey(0.8),
    marginLeft: 5,
  },
})

const maybelike = StyleSheet.create({
  container: {
    height: 250,
    marginVertical: 10,
  },
  card: {
    marginLeft: 7,
    marginRight: 3,
    top: 3,
    width: 110,
    height: 210,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey(0.2),
  },
  image: {
    width: '100%',
    borderRadius: 15,
    resizeMode: 'contain',
  },
  favorite: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 24,
    paddingVertical: 5,
    width: 'auto',
    height: 'auto',
    backgroundColor: colors.orange(),
    borderRadius: 10,
  },
  textFavorite: {
    fontFamily: fontType['Ct-Reguler'],
    fontSize: 13,
    color: colors.white(),
    paddingLeft: 5,
  },
})

const popular = StyleSheet.create({
  container: {
    height: 350,
    marginVertical: 10,
  },
  card: {
    marginVertical: 5,
    top: 3,
    width: 170,
    height: 140,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.grey(0.2),
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  judul: {
    top: 5,
    left: 5,
    color: colors.black(),
    fontSize: 15,
    fontFamily: fontType['Ct-Bold'],
  },
  genre: {
    paddingTop: 20,
    left: 5,
    color: colors.grey(0.8),
    fontSize: 10,
    fontFamily: fontType['Ct-Reguler'],
  },
  genreMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moreIcon: {
    top: 8,
    color: colors.grey(0.8),
    marginLeft: 5,
  },
})