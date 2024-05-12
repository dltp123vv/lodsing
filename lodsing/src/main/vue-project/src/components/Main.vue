<template>
 <div style="border: 1px solid blue; height: 600px;">
    <div class="containerImg" >
        <div class="overlay">
            <!-- 이미지 위에 오버레이를 추가할 내용을 넣으세요 -->
            <div class="row typecontailner">
                <div v-for="acctype in accommodationTypes" :key="acctype.accommodationTypeId">
                    <router-link :to="{ name: 'region', query: { accommodationTypeId: acctype.accommodationTypeId } }">
                    <img src="../assets/images/bed.png" v-if="acctype.accommodationTypeId == 'M'">
                    <img src="../assets/images/apartment.png" v-else-if="acctype.accommodationTypeId == 'H'">
                    <img src="../assets/images/building.png" v-else>
                    <h1>{{acctype.accommodationTypeName  }}</h1>
                    </router-link>
                </div>
            </div>
         </div>
        <img src="../assets/images/back1.jpg"/>
    </div>
  
 </div>

</template>

<script>
export default {
    data() {
    return {
        accommodationTypes : []
        }
    },

    methods: {
        getTypes(){
            this.$axios.get('/acc', {
    
        }).then((res) => {
          this.accommodationTypes = res.data.list;
        });
    }

    },

    created(){
        this.getTypes();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerImg {
    position: relative;
    height:540px; 
    /* border: 1px solid red;  */
    margin: 30px 50px; 
    overflow: hidden ;
}

.containerImg img{
    width: 100%; /* 이미지를 부모 요소의 너비에 맞게 조정 */
    height: auto; /* 가로세로 비율을 유지하여 이미지의 높이를 조정 */
    display: block; /*인라인 요소와 텍스트 베이스의 문제 해결*/

}

.overlay {
  position: absolute; /* 이미지에 상대적으로 배치하기 위해 절대 포지션 설정 */
  margin-left: 23%;
  margin-top: 15%;
  width: 55%;
  height: 50%;/* 부모 요소와 동일한 높이 */
  background: white; /* 배경 색상 및 투명도 설정 */
  color: black; /* 텍스트 색상 설정 */
  display: flex; /* 오버레이의 내용을 가운데 정렬하기 위해 flex 사용 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  border-radius: 20px;
}

.typecontailner {
    /* border: 1px solid blue;  */
    justify-content: center;

}

.typecontailner div {
    width: 150px; 
    height: 150px; 
    /* border: 1px solid red; */
     margin-left: 5%;
}

.typecontailner img{
    width: 80px;
    height: 80px;
    margin: auto;
    margin-top: 10px ;
}

.typecontailner h1 {
    margin-top: 20px;
}
</style>
