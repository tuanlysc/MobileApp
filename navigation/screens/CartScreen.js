import * as React from "react";
import { View, Text, TouchableOpacity,Image, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
export default function CartScreen({ navigation }) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLOURS.white,
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="chevron-left"
              style={{
                fontSize: 18,
                color: '#777777',
                padding: 12,
                backgroundColor: '#F0F0F3',
                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: '#000000',
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: '#000000',
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          My Cart
        </Text>
        <View style={{paddingHorizontal: 16}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F0F3',
                borderRadius: 10,
                marginRight: 22,
              }}>
              <Image
                source={require("../img/onepiece/luffy-gear5.jpg")}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: '#000000',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  Luffy Gear5
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      maxWidth: '85%',
                      marginRight: 4,
                    }}>
                    &#8377;300000
                  </Text>
                  {/* <Text>
                    (~&#8377;
                    {data.productPrice + data.productPrice / 20})
                  </Text> */}
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="minus"
                      style={{
                        fontSize: 16,
                        color: '#777777',
                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                    <MaterialCommunityIcons
                      name="plus"
                      style={{
                        fontSize: 16,
                        color: '#777777',
                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity >
                  <MaterialCommunityIcons
                    name="delete-outline"
                    style={{
                      fontSize: 16,
                      color: '#777777',
                      backgroundColor: '#F0F0F3',
                      padding: 8,
                      borderRadius: 100,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Địa điểm giao hàng
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: '#0043F9',
                    backgroundColor: '#F0F0F3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={{
                      fontSize: 18,
                      color: '#0043F9',
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: '500',
                    }}>
                    235 Hoang Quoc Viet, Ha Noi
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000000',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    07
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: '#000000'}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Phương thức thanh toán
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: '#0043F9',
                    backgroundColor: '#F0F0F3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: '#0043F9',
                      letterSpacing: 1,
                    }}>
                    Bank
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#000000',
                      fontWeight: '500',
                    }}>
                    BIDV
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#000000',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    88888888
                  </Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={{fontSize: 22, color: '#000000'}}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#000000',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Thông tin đặt hàng
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Tổng tiền hàng
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000000',
                  opacity: 0.8,
                }}>
                &#8377;300000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Phí vận chuyển
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000000',
                  opacity: 0.8,
                }}>
                &#8377;15000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: '#000000',
                  opacity: 0.5,
                }}>
                Tổng thanh toán
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: '#000000',
                }}>
                &#8377;315000
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: '#0043F9',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
            CHECKOUT (&#8377;315000 )
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
