<script>
    export default {
        props: ['onClick', 'isShow'],

        data() {
            return {
                test: 123
            };
        },

        render() {
            return (
                <div class="test" onClick={ this.onClick }>
            { this.test }
            { this.isShow + '' }
        </div>
        );
        }
    }
</script>