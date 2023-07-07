<script>
import { store } from '../store';
export default{
    name: "CategoryLable",
    data(){
        return{
            store,
        }
        
    },
    props:{
        category : Object
    }
}
</script>

<template>
<div class="form-check form-check-tag">
    <input class="form-check-input ms_form-check" type="checkbox" value="" :id="`category-${category.id}`">
    <label class="form-check-label absolute" :for="`category-${category.id}`">{{ category.name }}</label>
</div>
</template>

<style scoped lang="scss">
.categories-lables {
        height: 80%;
        flex-wrap: wrap;
        align-items: center;

        .form-check-tag {
          position: relative;
          border-radius: 30px;
          width: 120px;
          height: 50px;
          padding: 0;
          margin-right: 5px;
          z-index: 2;
          

          .form-check-input:focus {
            box-shadow: none;
          }

          .form-check-input:checked[type=checkbox] {
            background-image: none;
            background-color: rgba(255, 165, 47, 1);
          }

          .form-check-input {
            background-color: rgba(255, 165, 47, 0.5);
            border: none;
            border-radius: 30px;
          }

          .absolute {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            font-weight: bold;
            font-size: 1srem;
            z-index: 1;
            cursor: pointer;

          }

          .ms_form-check {
            width: 120px;
            height: 50px;
            padding: 0;
            margin: 0;
            cursor: pointer;
            transition: 200ms;
            &:active{
              transform: scale(.8);
            }
          }
        }
      }
</style>