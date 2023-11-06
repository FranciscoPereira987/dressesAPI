<script>
    import {Search, Button, Listgroup, ListgroupItem} from 'flowbite-svelte';
    import getDresses from '$lib/query'

    let value = '';

    let results = []

    const submitted = async () => {
        let queryResult = await getDresses(value, 2)
        console.log(queryResult)
        results = queryResult
    };
</script>

<form id="search-form" on:submit={submitted}>
    <Search bind:value>
        <Button type="submit">Search</Button>
    </Search>
</form>

{#if results.length > 0}    
<div class="group">
    <Listgroup items={results} let:item class="list">
        <ListgroupItem class="listItem">
            <img src={item.url} alt="Cat" />
        </ListgroupItem>
    </Listgroup>
</div>
{/if}