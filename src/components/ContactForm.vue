<script>
export default {
    name: "ContactForm"
}
</script>

<template>
    <div class="form-container">
        <form>
            <div class="form-field" tabindex="1">
                <label for="username">
                    <i class="far fa-user"></i>
                    <p>Il tuo nome</p>
                </label>
                <input name="username" type="text" placeholder="es. Mario Rossi" required>
                <div class="input-border"></div>
            </div>
            <div class="form-field" tabindex="2">
                <label for="email">
                    <i class="far fa-envelope"></i>
                    <p>La tua email</p>
                </label>
                <input name="email" type="text" placeholder="email@dominio.com" required>
                <div class="input-border"></div>
            </div>
            <div class="form-field" tabindex="3">
                <label for="message">
                    <i class="far fa-edit"></i>
                    <p>Il tuo messaggio</p>
                </label>
                <textarea name="message" placeholder="scrivi qui" required></textarea>
                <div class="input-border"></div>
            </div>
            <div class="text-center">
                <button type="reset">Invia Messaggio</button>
            </div>
        </form>
    </div>
</template>



<style lang="scss" scoped>
@use "../styles/partials/root.scss" as *;
@use "../styles/style.scss";

.form-container {
    display: flex;
    justify-content: center;
    padding: 50px;
    background-color: transparent;

    form {
        height: 500px;
        width: 50%;
        background-color: $green_deli;
        padding: 40px;
        border: 1px solid $green_deli;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
        border-radius: 8px;
        font-size: 1.3rem;

        .form-field {
            margin-bottom: 20px;
            position: relative;

            label {
                display: flex;
                align-items: center;
                margin-bottom: 5px;
                color: silver;

                i {
                    margin-right: 10px;
                }

                p {
                    color: white;
                }
            }

            input,
            textarea {
                width: 100%;
                padding: 10px;
                border: none;
                border-radius: 4px;
                background-color: #ffdd444e;
                z-index: 1;
            }

            input::placeholder,
            textarea::placeholder {
                color: rgba(0, 0, 0, 0.5);
            }

            .input-border {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 2px;
                background-color: $primary_color;
                z-index: 0;
                transform: scaleX(0);
                transition: transform 0.3s ease-in-out;
            }

            input:focus+.input-border,
            textarea:focus+.input-border {
                transform: scaleX(1);
                background-color: orange;
                transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
            }
        }

        button {
            background-color: $primary_color;
            color: black;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: .3s ease-in-out;
        }

        button:hover {
            transform: scale(1.05);
            color: $green_deli;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
        }
    }
}
</style>